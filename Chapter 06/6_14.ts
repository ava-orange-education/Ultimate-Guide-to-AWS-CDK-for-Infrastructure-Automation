const environment = this.node.tryGetContext('environment');

const role = new iam.Role(this, 'EnvSpecificRole', {
  assumedBy: new iam.ServicePrincipal('ec2.amazonaws.com'),
  managedPolicies: [
    iam.ManagedPolicy.fromAwsManagedPolicyName(environment === 'production' 
      ? 'AmazonS3FullAccess' 
      : 'AmazonS3ReadOnlyAccess')
  ],
});
