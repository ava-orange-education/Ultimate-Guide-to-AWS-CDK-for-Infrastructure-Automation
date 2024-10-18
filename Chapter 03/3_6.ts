import * as cdk from 'aws-cdk-lib';
import { CfnBucket } from 'aws-cdk-lib/aws-s3';

class L1BucketStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);
        new CfnBucket(this, 'MyL1Bucket', {
            bucketName: 'my-l1-bucket'
        });
    }
}
