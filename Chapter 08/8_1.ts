import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';

export class ReusableBucket extends Construct {
  public readonly bucket: s3.Bucket;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    // Create an S3 bucket with default properties
    this.bucket = new s3.Bucket(this, 'MyReusableBucket', {
      versioned: true,
      removalPolicy: s3.RemovalPolicy.DESTROY,
      autoDeleteObjects: true
    });
  }
}
