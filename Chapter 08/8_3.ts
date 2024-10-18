import * as s3 from 'aws-cdk-lib/aws-s3';
import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class MyS3BucketStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Define an L2 S3 bucket construct
    const bucket = new s3.Bucket(this, 'MyBucket', {
      versioned: true,         // Enable versioning
      removalPolicy: s3.RemovalPolicy.DESTROY // Automatically destroy on stack deletion
    });
  }
}
