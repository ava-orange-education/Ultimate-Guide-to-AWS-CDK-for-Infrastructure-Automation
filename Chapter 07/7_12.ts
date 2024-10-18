myRole.addToPolicy(new iam.PolicyStatement({
    actions: ['s3:PutObject'],
    resources: ['arn:aws:s3:::my-bucket/*'],
  }));
  