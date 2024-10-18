// cdk.json
{
    "context": {
      "stage": "prod",
      "bucketName": "my-production-bucket"
    }
  }
  
  import * as cdk from 'aws-cdk-lib';
  import * as s3 from 'aws-cdk-lib/aws-s3';
  
  class MyStack extends cdk.Stack {
      constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
          super(scope, id, props);
          const stage = this.node.tryGetContext('stage');
          const bucketName = this.node.tryGetContext('bucketName');
          new s3.Bucket(this, 'MyBucket', {
              bucketName: bucketName,
              versioned: stage === 'prod',
          });
      }
  }
  