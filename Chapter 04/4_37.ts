// In the producing stack:
new cdk.CfnOutput(this, 'VpcId', {
  value: vpc.vpcId,
  exportName: 'VpcId',
});
//In the consuming stack:
const vpcId = cdk.Fn.importValue('VpcId');
const vpc = ec2.Vpc.fromLookup(this, 'ImportedVpc', { vpcId });
