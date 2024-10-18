import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';

export class CustomS3Bucket extends cdk.Construct {
  public readonly bucket: s3.Bucket;

  constructor(scope: cdk.Construct, id: string, versioned: boolean) {
    super(scope, id);

    this.bucket = new s3.Bucket(this, 'MyBucket', {
      versioned: versioned,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });
  }
}
