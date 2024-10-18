const customLambda = new lambda.Function(this, 'CustomLambdaFunction', {
    runtime: lambda.Runtime.NODEJS_18_X,
    code: lambda.Code.fromAsset('lambda'), // Path to your Lambda code
    handler: 'index.handler',
  });
  