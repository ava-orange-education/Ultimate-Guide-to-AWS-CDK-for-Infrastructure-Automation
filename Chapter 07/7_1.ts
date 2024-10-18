const policy = new iam.PolicyStatement({
    actions: ['s3:*'], // Allows all actions on S3
    resources: ['*'],  // Grants access to all resources
  });
  