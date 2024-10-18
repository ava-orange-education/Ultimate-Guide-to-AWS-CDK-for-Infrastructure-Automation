import * as sqs from 'aws-cdk-lib/aws-sqs';
import { SqsDestination } from 'aws-cdk-lib/aws-lambda-destinations';

// Create Dead-Letter Queue
const deadLetterQueue = new sqs.Queue(this, 'DLQ');

// Add DLQ to Lambda function
const processFileLambda = new Function(this, 'ProcessFileLambda', {
  runtime: Runtime.NODEJS_18_X,
  handler: 'index.handler',
  code: Code.fromAsset('lambda'),
  environment: {
    BUCKET_NAME: bucket.bucketName,
  },
  deadLetterQueue,
  retryAttempts: 3, // Retry up to three times before moving to DLQ
});
