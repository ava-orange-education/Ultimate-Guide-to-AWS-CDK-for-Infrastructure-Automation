import * as ec2 from 'aws-cdk-lib/aws-ec2';

const securityGroup = new ec2.SecurityGroup(this, 'WebServerSG', {
  vpc,
  allowAllOutbound: true, // Allow all outbound traffic by default
  description: 'Security group for web servers',
  securityGroupName: 'WebServerSG',
});

// Allow HTTP and SSH inbound traffic
securityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(80), 'Allow HTTP traffic');
securityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(22), 'Allow SSH access');
