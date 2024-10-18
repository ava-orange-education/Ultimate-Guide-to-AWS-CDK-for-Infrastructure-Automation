const region = this.node.tryGetContext('region') || process.env.CDK_DEFAULT_REGION;

new s3.Bucket(this, 'MyRegionalBucket', {
  bucketName: `my-bucket-${region}`,
  removalPolicy: cdk.RemovalPolicy.DESTROY,
  autoDeleteObjects: true,
  encryption: s3.BucketEncryption.S3_MANAGED,
});
