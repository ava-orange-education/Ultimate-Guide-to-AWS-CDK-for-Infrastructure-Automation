import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';

class MyStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);
        new s3.Bucket(this, 'MyBucket', {
            versioned: true,
        });
    }
}

class MyApp extends cdk.App {
    constructor() {
        super();

        new MyStack(this, 'MyFirstStack');
    }
}
