import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { MyStack } from '../lib/my-stack';

test('S3 Bucket Created', () => {
  const app = new cdk.App();
  const stack = new MyStack(app, 'TestStack');

  const template = Template.fromStack(stack);
  template.hasResourceProperties('AWS::S3::Bucket', {
    BucketName: 'my-bucket'
  });
});
