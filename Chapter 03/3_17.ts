import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';

class MyStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        new s3.Bucket(this, 'MyBucket', {
            versioned: process.env.STAGE === 'prod', // Enable versioning only in production
            removalPolicy: process.env.STAGE === 'prod' ? cdk.RemovalPolicy.RETAIN : cdk.RemovalPolicy.DESTROY,
        });
    }
}

const app = new cdk.App();

new MyStack(app, 'DevStack', {
    env: { account: '123456789012', region: 'us-west-2' },
});

new MyStack(app, 'ProdStack', {
    env: { account: '123456789012', region: 'us-east-1' },
});
