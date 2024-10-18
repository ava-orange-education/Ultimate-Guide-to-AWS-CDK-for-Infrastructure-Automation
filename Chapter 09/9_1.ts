const environment = process.env.ENVIRONMENT || 'development';

new s3.Bucket(this, 'MyBucket', {
  bucketName: `my-app-bucket-${environment}`,
});
