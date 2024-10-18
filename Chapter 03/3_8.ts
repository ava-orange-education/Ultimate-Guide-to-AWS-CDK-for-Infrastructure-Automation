import * as cdk from 'aws-cdk-lib';
import { LambdaRestApi } from 'aws-cdk-lib/aws-apigateway';
import { Runtime, Code } from 'aws-cdk-lib/aws-lambda';
import * as path from 'path';

class L3ApiStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);
        const api = new LambdaRestApi(this, 'MyL3Api', {
            handler: new lambda.Function(this, 'MyFunction', {
                runtime: Runtime.NODEJS_14_X,
                handler: 'index.handler',
                code: Code.fromAsset(path.join(__dirname, 'lambda')),
            }),
            proxy: true
        });
    }
}
