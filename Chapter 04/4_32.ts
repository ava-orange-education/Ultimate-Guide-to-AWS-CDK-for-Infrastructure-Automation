import * as ssm from 'aws-cdk-lib/aws-ssm';

const vpcCidr = ssm.StringParameter.valueForStringParameter(this, '/myapp/vpc-cidr');

const vpc = new ec2.Vpc(this, 'Vpc', {
  cidr: vpcCidr,
});
