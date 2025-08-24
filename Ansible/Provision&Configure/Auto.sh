#!/bin/bash

# ===========================
# Safety Flags
# ===========================
set -euo pipefail   # Exit immediately if a command fails, use of undefined variable, or pipeline error

# ===========================
# Variables
# ===========================
TF_DIR="$HOME/terraform"           # Path where your Terraform files are
ANSIBLE_DIR="$HOME/ansible"        # Path to store inventory and playbooks
PLAYBOOK="$ANSIBLE_DIR/configure.yml"
INVENTORY_FILE="$ANSIBLE_DIR/inventory.ini"

# ===========================
# Helper: Check dependencies
# ===========================
check_command() {
  if ! command -v "$1" &> /dev/null; then
    echo "❌ ERROR: '$1' is not installed or not in PATH."
    exit 1
  fi
}

echo ">>> Checking dependencies..."
check_command terraform
check_command jq
check_command ansible-playbook

# ===========================
# Step 1: Run Terraform
# ===========================
echo ">>> Initializing Terraform..."
cd "$TF_DIR"
terraform init -input=false

echo ">>> Applying Terraform configuration..."
terraform apply -auto-approve

echo ">>> Exporting Terraform outputs..."
terraform output -json instance_public_ips > instance_ips.json || { echo "❌ Failed to get instance_public_ips"; exit 1; }

# Get the key name dynamically from Terraform output
if ! KEY_NAME=$(terraform output -raw key_name 2>/dev/null); then
  echo "❌ ERROR: Terraform output 'key_name' not found. Did you define it in outputs.tf?"
  exit 1
fi

KEY_PATH="$ANSIBLE_DIR/$KEY_NAME"

# ===========================
# Step 2: Copy PEM file to Ansible directory
# ===========================
echo ">>> Copying PEM file to Ansible directory..."
mkdir -p "$ANSIBLE_DIR"

if [[ ! -f "$TF_DIR/$KEY_NAME" ]]; then
  echo "❌ ERROR: PEM file $TF_DIR/$KEY_NAME not found!"
  exit 1
fi

cp "$TF_DIR/$KEY_NAME" "$KEY_PATH"
chmod 600 "$KEY_PATH"


# =========================== 
# Step 3: Generate Ansible inventory 
# ===========================
echo ">>> Generating Ansible inventory..."
echo "[jenkins]" > "$INVENTORY_FILE"
for NAME in $(jq -r 'keys[]' instance_ips.json); do
  IP=$(jq -r --arg name "$NAME" '.[$name]' instance_ips.json)
  if [[ "$NAME" == *"jenkins"* ]]; then
    echo "$IP ansible_host=$IP ansible_user=ec2-user ansible_ssh_private_key_file=$KEY_PATH" >> "$INVENTORY_FILE"
  fi
done

echo "" >> "$INVENTORY_FILE"
echo "[docker_nginx]" >> "$INVENTORY_FILE"
for NAME in $(jq -r 'keys[]' instance_ips.json); do
  IP=$(jq -r --arg name "$NAME" '.[$name]' instance_ips.json)
  if [[ "$NAME" == *"docker_nginx"* ]]; then
    echo "$IP ansible_host=$IP ansible_user=ec2-user ansible_ssh_private_key_file=$KEY_PATH" >> "$INVENTORY_FILE"
  fi
done


echo ">>> ✅ Inventory created at $INVENTORY_FILE"

# ===========================
# Step 4: Run Ansible Playbook
# ===========================
echo ">>> Running Ansible playbook..."
ansible-playbook -i "$INVENTORY_FILE" "$PLAYBOOK" || {
  echo "❌ ERROR: Ansible playbook failed."
  exit 1
}
