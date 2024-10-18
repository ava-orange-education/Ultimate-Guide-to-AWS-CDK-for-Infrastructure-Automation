new s3.Bucket(this, 'MyBucket', {
    bucketName: 'my-bucket-' + this.account,
    versioned: true,
});
