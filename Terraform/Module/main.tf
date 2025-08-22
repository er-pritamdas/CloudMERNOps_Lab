terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

# ---------------------------
# Key Pair
# ---------------------------
resource "tls_private_key" "demo_key" {
  algorithm = "RSA"
  rsa_bits  = 2048
}

resource "aws_key_pair" "demo_keypair" {
  key_name   = "${var.project_name}-key"
  public_key = tls_private_key.demo_key.public_key_openssh
}

resource "local_file" "private_key_pem" {
  content         = tls_private_key.demo_key.private_key_pem
  filename        = "${path.module}/${var.project_name}-key.pem"
  file_permission = "0600"
}

# ---------------------------
# VPC
# ---------------------------
resource "aws_vpc" "demo_vpc" {
  cidr_block = var.vpc_cidr

  tags = {
    Name = "${var.project_name}-VPC"
  }
}

# ---------------------------
# Subnet
# ---------------------------
resource "aws_subnet" "demo_subnet" {
  vpc_id            = aws_vpc.demo_vpc.id
  cidr_block        = var.subnet_cidr
  availability_zone = var.availability_zone

  tags = {
    Name = "${var.project_name}-Subnet"
  }
}

# ---------------------------
# Internet Gateway
# ---------------------------
resource "aws_internet_gateway" "demo_gw" {
  vpc_id = aws_vpc.demo_vpc.id

  tags = {
    Name = "${var.project_name}-IGW"
  }
}

# ---------------------------
# Route Table + Association
# ---------------------------
resource "aws_route_table" "demo_rt" {
  vpc_id = aws_vpc.demo_vpc.id

  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.demo_gw.id
  }

  tags = {
    Name = "${var.project_name}-Route-Table"
  }
}

resource "aws_route_table_association" "demo_rta" {
  subnet_id      = aws_subnet.demo_subnet.id
  route_table_id = aws_route_table.demo_rt.id
}

# ---------------------------
# Security Group
# ---------------------------
resource "aws_security_group" "demo_sg" {
  vpc_id = aws_vpc.demo_vpc.id

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "${var.project_name}-SG"
  }
}

resource "aws_instance" "demo" {
  for_each = var.ec2_instances

  ami                         = each.value
  instance_type               = var.instance_type
  subnet_id                   = aws_subnet.demo_subnet.id
  vpc_security_group_ids      = [aws_security_group.demo_sg.id]
  associate_public_ip_address = true
  key_name                    = aws_key_pair.demo_keypair.key_name

  tags = {
    Name = each.key
  }
}

resource "local_file" "outputs" {
  filename = "${path.module}/terraform-outputs.txt"
  content  = <<EOT
VPC ID: ${aws_vpc.demo_vpc.id}
Subnet ID: ${aws_subnet.demo_subnet.id}
Internet Gateway ID: ${aws_internet_gateway.demo_gw.id}
Route Table ID: ${aws_route_table.demo_rt.id}
Security Group ID: ${aws_security_group.demo_sg.id}
Key Pair: ${aws_key_pair.demo_keypair.key_name}

Instances:
%{ for name, instance in aws_instance.demo ~}
Name: ${name}, Public IP: ${instance.public_ip}, Private IP: ${instance.private_ip}
%{ endfor ~}
EOT
}
