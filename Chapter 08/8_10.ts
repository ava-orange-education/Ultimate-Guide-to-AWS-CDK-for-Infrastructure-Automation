import { Template } from 'aws-cdk-lib/assertions';
import { App } from 'aws-cdk-lib';
import { MyCustomStack } from '../lib/my-custom-stack';

test('S3 Bucket and Lambda Function Created', () => {
  const app = new App();
  const stack = new MyCustomStack(app, 'TestStack');

  const template = Template.fromStack(stack);
  
  // Check if an S3 bucket is created
  template.hasResourceProperties('AWS::S3::Bucket', {
    BucketName: 'my-custom-bucket'
  });

  // Check if a Lambda function is created
  template.hasResourceProperties('AWS::Lambda::Function', {
    Handler: 'index.handler',
    Runtime: 'nodejs14.x'
  });
});
