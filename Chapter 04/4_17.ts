import * as apigatewayv2 from 'aws-cdk-lib/aws-apigatewayv2';
import * as integrations from 'aws-cdk-lib/aws-apigatewayv2-integrations';

const httpApi = new apigatewayv2.HttpApi(this, 'HttpApi', {
  apiName: 'MyHttpApi',
  description: 'An HTTP API for my service.',
});
