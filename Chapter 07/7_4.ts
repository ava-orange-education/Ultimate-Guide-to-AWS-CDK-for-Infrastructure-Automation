import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { MyStack } from '../lib/my-stack';

test('S3 Bucket Created with Versioning Enabled', () => {
  const app = new cdk.App();
  const stack = new MyStack(app, 'TestStack');
  
  // Extract the generated CloudFormation template
  const template = Template.fromStack(stack);
  
  // Assert that the bucket has versioning enabled
  template.hasResourceProperties('AWS::S3::Bucket', {
    VersioningConfiguration: {
      Status: 'Enabled',
    },
  });
});
