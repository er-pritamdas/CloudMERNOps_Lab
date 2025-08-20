output "vpc_id" {
  description = "The ID of the VPC"
  value       = aws_vpc.demo_vpc.id
}

output "subnet_id" {
  description = "The ID of the Subnet"
  value       = aws_subnet.demo_subnet.id
}

output "internet_gateway_id" {
  description = "The ID of the Internet Gateway"
  value       = aws_internet_gateway.demo_gw.id
}

output "route_table_id" {
  description = "The ID of the Route Table"
  value       = aws_route_table.demo_rt.id
}

output "security_group_id" {
  description = "The ID of the Security Group"
  value       = aws_security_group.demo_sg.id
}

output "instance_id" {
  description = "The ID of the EC2 instance"
  value       = aws_instance.demo.id
}

output "instance_public_ip" {
  description = "Public IP of the EC2 instance"
  value       = aws_instance.demo.public_ip
}

output "instance_private_ip" {
  description = "Private IP of the EC2 instance"
  value       = aws_instance.demo.private_ip
}
