import * as cdk from 'aws-cdk-lib';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Function, Runtime, Code } from 'aws-cdk-lib/aws-lambda';
import { S3EventSource } from 'aws-cdk-lib/aws-lambda-event-sources';
import { Construct } from 'constructs';

export class S3EventNotificationStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create an S3 bucket
    const bucket = new Bucket(this, 'UploadBucket', {
      versioned: true,
    });

    // Create a Lambda function to process the uploaded files
    const processFileLambda = new Function(this, 'ProcessFileLambda', {
      runtime: Runtime.NODEJS_20_0,
      handler: 'index.handler',
      code: Code.fromAsset('lambda'),
      environment: {
        BUCKET_NAME: bucket.bucketName,
      },
    });

    // Add S3 Event Source to trigger the Lambda function
    processFileLambda.addEventSource(
      new S3EventSource(bucket, {
        events: ['s3:ObjectCreated:*'],
      })
    );

    // Grant bucket permissions to Lambda
    bucket.grantReadWrite(processFileLambda);
  }
}
