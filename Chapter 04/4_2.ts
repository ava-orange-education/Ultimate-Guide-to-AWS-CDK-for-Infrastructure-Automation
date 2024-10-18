import * as ec2 from 'aws-cdk-lib/aws-ec2';

// Example VPC with multiple NAT Gateways for redundancy
const vpc = new ec2.Vpc(this, 'MyVPC', {
  ipAddresses: ec2.IpAddresses.cidr('10.0.0.0/16'),
  natGateways: 2, // Deploy NAT Gateways in multiple AZs
  maxAzs: 2,
  subnetConfiguration: [
    {
      name: 'Public',
      subnetType: ec2.SubnetType.PUBLIC,
      cidrMask: 24,
    },
    {
      name: 'Private',
      subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
      cidrMask: 24,
    },
    {
      name: 'Isolated',
      subnetType: ec2.SubnetType.PRIVATE_ISOLATED,
      cidrMask: 28,
    }
  ]
});
