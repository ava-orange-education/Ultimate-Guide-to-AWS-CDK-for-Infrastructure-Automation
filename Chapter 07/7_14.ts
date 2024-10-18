// In Stack A, export the resource
const bucket = new s3.Bucket(this, 'MyBucket');
new cdk.CfnOutput(this, 'BucketOutput', { value: bucket.bucketName });

// In Stack B, import the resource
const importedBucket = s3.Bucket.fromBucketName(this, 'ImportedBucket', Fn.importValue('BucketOutput'));
