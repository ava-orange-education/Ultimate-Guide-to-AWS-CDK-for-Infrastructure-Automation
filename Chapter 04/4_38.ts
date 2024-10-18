//In the first stack:
new ssm.StringParameter(this, 'VpcIdParam', {
  parameterName: '/myapp/vpc-id',
  stringValue: vpc.vpcId,
});
//In another stack:
const vpcId = ssm.StringParameter.valueForStringParameter(this, '/myapp/vpc-id');
const vpc = ec2.Vpc.fromLookup(this, 'ImportedVpc', { vpcId });
