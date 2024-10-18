const bucket = new s3.Bucket(this, 'MyBucket', {
    encryption: s3.BucketEncryption.S3_MANAGED,
  });
  