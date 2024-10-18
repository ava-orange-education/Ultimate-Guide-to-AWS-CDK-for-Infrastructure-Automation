const lambdaRole = new iam.Role(this, 'LambdaExecutionRole', {
    assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
    inlinePolicies: {
      'LambdaDynamoDBPolicy': new iam.PolicyDocument({
        statements: [new iam.PolicyStatement({
          actions: ['dynamodb:GetItem', 'dynamodb:PutItem'],
          resources: ['arn:aws:dynamodb:us-west-2:123456789012:table/MyTable'],
        })],
      }),
    },
  });
  