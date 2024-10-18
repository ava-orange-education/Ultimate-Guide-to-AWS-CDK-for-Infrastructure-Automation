const bucket = new s3.Bucket(this, 'MyBucket', {
    bucketName: 'my-secure-bucket',
  });
  
  bucket.addToResourcePolicy(new iam.PolicyStatement({
    actions: ['s3:GetObject'],
    resources: [`${bucket.bucketArn}/*`],
    principals: [new iam.AccountPrincipal('123456789012')],
  }));
  