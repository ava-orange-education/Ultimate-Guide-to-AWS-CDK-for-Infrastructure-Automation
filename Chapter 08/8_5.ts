import { Bucket } from 'aws-cdk-lib/aws-s3';
import { Table, AttributeType } from 'aws-cdk-lib/aws-dynamodb';
import { Function, Runtime, Code } from 'aws-cdk-lib/aws-lambda';
import { LambdaRestApi } from 'aws-cdk-lib/aws-apigateway';
import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class ComplexAppStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Define an S3 bucket
    const bucket = new Bucket(this, 'MyAppBucket', {
      versioned: true
    });

    // Define a DynamoDB table
    const table = new Table(this, 'MyAppTable', {
      partitionKey: { name: 'id', type: AttributeType.STRING }
    });

    // Define a Lambda function
    const myFunction = new Function(this, 'MyFunction', {
      runtime: Runtime.NODEJS_18_X,
      handler: 'index.handler',
      code: Code.fromAsset('lambda'),
      environment: {
        BUCKET_NAME: bucket.bucketName,
        TABLE_NAME: table.tableName
      }
    });

    // Grant necessary permissions
    bucket.grantReadWrite(myFunction);
    table.grantReadWriteData(myFunction);

    // Define an API Gateway linked to the Lambda function
    new LambdaRestApi(this, 'MyLambdaApi', {
      handler: myFunction
    });
  }
}
