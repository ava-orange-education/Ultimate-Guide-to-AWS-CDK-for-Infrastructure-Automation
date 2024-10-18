import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as lambda from 'aws-cdk-lib/aws-lambda';

const myBucket = new s3.Bucket(this, 'MyBucket');
const myLambda = new lambda.Function(this, 'MyLambda', {
  code: lambda.Code.fromAsset('lambda'),
  handler: 'index.handler',
  runtime: lambda.Runtime.NODEJS_14_X,
});

// Ensure the Lambda function depends on the S3 bucket
myLambda.node.addDependency(myBucket);
