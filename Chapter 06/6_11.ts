const myRole = new iam.Role(this, 'MyRole', {
    assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
  });
  
  myRole.addManagedPolicy(iam.ManagedPolicy.fromAwsManagedPolicyName('service-role/AWSLambdaBasicExecutionRole'));
  myRole.addToPolicy(new iam.PolicyStatement({
    actions: ['dynamodb:Query'],
    resources: ['arn:aws:dynamodb:us-west-2:123456789012:table/MyTable'],
  }));
  