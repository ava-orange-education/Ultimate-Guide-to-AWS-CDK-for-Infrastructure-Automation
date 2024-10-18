import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';

export class ReusableLambda extends Construct {
  public readonly handler: lambda.Function;

  constructor(scope: Construct, id: string, props: lambda.FunctionProps) {
    super(scope, id);

    this.handler = new lambda.Function(this, 'LambdaHandler', props);
  }
}

export class ReusableApiGateway extends Construct {
  constructor(scope: Construct, id: string, handler: lambda.Function) {
    super(scope, id);

    const api = new apigateway.LambdaRestApi(this, 'ApiGateway', {
      handler,
    });
  }
}
