import * as kms from 'aws-cdk-lib/aws-kms';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class SecureAppStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Create a KMS key for encryption
    const kmsKey = new kms.Key(this, 'MyKMSKey');

    // Define an encrypted S3 bucket
    const bucket = new s3.Bucket(this, 'SecureBucket', {
      encryption: s3.BucketEncryption.KMS,
      encryptionKey: kmsKey
    });

    // Define a Lambda function with access to the KMS-encrypted bucket
    const myFunction = new lambda.Function(this, 'SecureFunction', {
      runtime: lambda.Runtime.NODEJS_18_X,
      handler: 'index.handler',
      code: lambda.Code.fromAsset('lambda'),
      environment: {
        BUCKET_NAME: bucket.bucketName
      }
    });

    bucket.grantReadWrite(myFunction);
  }
}
