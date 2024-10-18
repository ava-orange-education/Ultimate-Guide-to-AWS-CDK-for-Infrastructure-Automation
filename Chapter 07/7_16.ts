const myFunction = new lambda.Function(this, 'MyFunction', {
    runtime: lambda.Runtime.NODEJS_18_X,
    handler: 'index.handler',
    code: lambda.Code.fromAsset('lambda'),
    logRetention: logs.RetentionDays.ONE_WEEK,
  });
  