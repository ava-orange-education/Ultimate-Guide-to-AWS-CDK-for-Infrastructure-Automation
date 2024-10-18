import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';

class MyStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        // Define an S3 bucket
        new s3.Bucket(this, 'MyBucket', {
            versioned: true,
        });
    }
}
