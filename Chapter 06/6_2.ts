const developerRole = new iam.Role(this, 'DeveloperRole', {
    assumedBy: new iam.ArnPrincipal('arn:aws:iam::123456789012:user/DeveloperUser'),
  });
  
  developerRole.addToPolicy(new iam.PolicyStatement({
    actions: [
      's3:ListBucket',
      's3:GetObject',
      'lambda:InvokeFunction'
    ],
    resources: [
      'arn:aws:s3:::my-public-bucket/*',
      'arn:aws:lambda:us-west-2:123456789012:function:MyFunction'
    ],
  }));
  