import * as s3 from 'aws-cdk-lib/aws-s3';
import * as lambda from 'aws-cdk-lib/aws-lambda';

const bucket = new s3.Bucket(this, 'MyBucket');
const myFunction = new lambda.Function(this, 'MyFunction', {
    runtime: lambda.Runtime.NODEJS_14_X,
    handler: 'index.handler',
    code: lambda.Code.fromBucket(bucket, 'path/to/code.zip'),
});
