import * as s3 from 'aws-cdk-lib/aws-s3';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

export interface CustomS3LambdaProps {
  readonly bucketName: string;
}

export class CustomS3Lambda extends Construct {
  constructor(scope: Construct, id: string, props: CustomS3LambdaProps) {
    super(scope, id);

    // Create an S3 bucket with encryption
    const bucket = new s3.Bucket(this, 'MyCustomBucket', {
      bucketName: props.bucketName,
      encryption: s3.BucketEncryption.S3_MANAGED
    });

    // Create a Lambda function
    const fn = new lambda.Function(this, 'MyCustomFunction', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset('lambda'),
      environment: {
        BUCKET_NAME: bucket.bucketName
      }
    });

    // Grant Lambda function access to the bucket
    bucket.grantReadWrite(fn);
  }
}
