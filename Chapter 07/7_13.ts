myLambdaFunction.addToRolePolicy(new iam.PolicyStatement({
    actions: ['s3:GetObject', 's3:PutObject'],
    resources: ['arn:aws:s3:::my-bucket/*'],
  }));
  