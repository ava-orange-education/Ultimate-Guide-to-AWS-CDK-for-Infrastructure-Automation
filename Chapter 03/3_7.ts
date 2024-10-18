import * as cdk from 'aws-cdk-lib';
import { Bucket, BucketEncryption } from 'aws-cdk-lib/aws-s3';

class L2BucketStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);
        new Bucket(this, 'MyL2Bucket', {
            bucketName: 'my-l2-bucket',
            versioned: true,
            encryption: BucketEncryption.S3_MANAGED,
            publicReadAccess: false
        });
    }
}
