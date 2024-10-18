import * as s3 from 'aws-cdk-lib/aws-s3';

export class FrontendBucketStack extends cdk.Stack {
  public readonly bucket: s3.Bucket;

  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create an S3 bucket with versioning and lifecycle rules
    Const bucket = new s3.Bucket(this, 'FrontendBucket', {
      versioned: true, // Enable versioning
      lifecycleRules: [
        {
          id: 'MoveOldVersionsToGlacier',
          noncurrentVersionTransitions: [
            {
              storageClass: s3.StorageClass.GLACIER, // Archive old versions to Glacier
              transitionAfter: cdk.Duration.days(90),
            },
          ],
          noncurrentVersionExpiration: cdk.Duration.days(365), // Delete old versions after a year
        },
      ],
    });
  }
}
