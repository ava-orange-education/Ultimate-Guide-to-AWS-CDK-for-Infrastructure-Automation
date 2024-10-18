import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';

class MyLambdaStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        new lambda.Function(this, 'MyLambdaFunction', {
            runtime: lambda.Runtime.NODEJS_14_X,
            handler: 'index.handler',
            code: lambda.Code.fromAsset('lambda'),
            environment: {
                STAGE: process.env.STAGE || 'dev',
                API_KEY: process.env.API_KEY || 'default-api-key',
            },
        });
    }
}
