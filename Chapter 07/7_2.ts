test('S3 bucket has versioning enabled', () => {
    const app = new cdk.App();
    const stack = new MyStack(app, 'TestStack');
    
    const template = Template.fromStack(stack);
    template.hasResourceProperties('AWS::S3::Bucket', {
      VersioningConfiguration: {
        Status: 'Enabled'
      }
    });
  });
  