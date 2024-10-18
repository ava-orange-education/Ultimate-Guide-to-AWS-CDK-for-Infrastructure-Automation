const deploymentRole = new iam.Role(this, 'CrossAccountDeploymentRole', {
    assumedBy: new iam.AccountPrincipal('123456789012'), // Source account ID
    roleName: 'DeploymentRole',
  });
  
  deploymentRole.addToPolicy(new iam.PolicyStatement({
    actions: [
      'cloudformation:CreateStack',
      'cloudformation:UpdateStack',
      's3:GetObject',
    ],
    resources: [
      'arn:aws:cloudformation:us-west-2:987654321098:stack/*',
      'arn:aws:s3:::target-account-bucket/*'
    ],
  }));
  