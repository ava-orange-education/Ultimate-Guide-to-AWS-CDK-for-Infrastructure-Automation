import * as s3 from 'aws-cdk-lib/aws-s3';
import * as cdk from 'aws-cdk-lib'; 
import { Construct } from 'constructs';

export class CustomS3Bucket extends s3.Bucket {
  constructor(scope: Construct, id: string) {
    super(scope, id, {
      versioned: true,
      removalPolicy: s3.RemovalPolicy.RETAIN // Customized removal policy
    });

    // Additional custom logic
    this.addLifecycleRule({
      id: 'ExpireOldVersions',
      enabled: true,
      noncurrentVersionExpiration: cdk.Duration.days(30) 
    });
  }
}
