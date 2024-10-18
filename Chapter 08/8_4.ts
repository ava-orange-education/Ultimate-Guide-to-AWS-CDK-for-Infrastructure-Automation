import { LambdaRestApi } from 'aws-cdk-lib/aws-apigateway';
import { Function, Runtime, Code } from 'aws-cdk-lib/aws-lambda';
import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class LambdaApiStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Define a Lambda function
    const myFunction = new Function(this, 'MyFunction', {
      runtime: Runtime.NODEJS_18_X,
      handler: 'index.handler',
      code: Code.fromAsset('lambda')
    });

    // Define a REST API Gateway connected to the Lambda function
    new LambdaRestApi(this, 'MyLambdaApi', {
      handler: myFunction
    });
  }
}
