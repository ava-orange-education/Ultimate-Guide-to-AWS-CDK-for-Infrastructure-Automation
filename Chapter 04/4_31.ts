import * as dotenv from 'dotenv';
dotenv.config();

const vpcCidr = process.env.VPC_CIDR || '10.0.0.0/16';

const vpc = new ec2.Vpc(this, 'Vpc', {
  cidr: vpcCidr,
});
