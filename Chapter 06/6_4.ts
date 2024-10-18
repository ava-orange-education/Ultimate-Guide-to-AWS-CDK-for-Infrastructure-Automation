const pipelineRole = new iam.Role(this, 'PipelineRole', {
    assumedBy: new iam.ServicePrincipal('codepipeline.amazonaws.com'),
  });
  
  pipelineRole.addToPolicy(new iam.PolicyStatement({
    actions: [
      'cloudformation:CreateStack',
      'cloudformation:UpdateStack',
      's3:GetObject',
      's3:PutObject'
    ],
    resources: [
      'arn:aws:cloudformation:us-west-2:123456789012:stack/*',
      'arn:aws:s3:::my-artifacts-bucket/*'
    ],
  }));
  