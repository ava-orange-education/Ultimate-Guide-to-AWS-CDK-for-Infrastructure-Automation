const myCustomResource = new cdk.CustomResource(this, 'MyCustomResource', {
    serviceToken: customLambda.functionArn,
    properties: {
      Param1: 'Value1',
      Param2: 'Value2',
    },
  });
  