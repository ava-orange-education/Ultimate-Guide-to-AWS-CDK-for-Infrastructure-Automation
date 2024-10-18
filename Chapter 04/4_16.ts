import * as cdk from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';

export class ApiGatewayStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string) {
    super(scope, id);

    const api = new apigateway.RestApi(this, 'MyApi', {
      restApiName: 'My Service',
      description: 'This service handles my business logic.',
    });

    const resource = api.root.addResource('items');
    resource.addMethod('GET');  // GET /items
  }
}
