// Add a bucket policy for public read access
bucket.addToResourcePolicy(new iam.PolicyStatement({
    actions: ['s3:GetObject'],
    resources: [`${this.bucket.bucketArn}/*`], // Allow public access to all objects
    principals: [new iam.AnyPrincipal()], // Open to all users
  }));
  To prevent unauthorized deletions or changes, you can limit access to only the necessary actions and users:
  this.bucket.addToResourcePolicy(new iam.PolicyStatement({
    actions: ['s3:DeleteObject'],
    resources: [`${this.bucket.bucketArn}/*`],
    principals: [new iam.AccountPrincipal(this.account)], // Restrict to your account
    effect: iam.Effect.DENY,
  }));
  