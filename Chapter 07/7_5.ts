test('Snapshot Test for Lambda Stack', () => {
    const app = new cdk.App();
    const stack = new MyLambdaStack(app, 'LambdaStack');
    
    // Create a snapshot of the stack's CloudFormation template
    const template = Template.fromStack(stack);
    
    // Snapshot the template for future comparisons
    expect(template).toMatchSnapshot();
  });
  