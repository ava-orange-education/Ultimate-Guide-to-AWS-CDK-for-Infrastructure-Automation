import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3deploy from 'aws-cdk-lib/aws-s3-deployment';

const bucket = new s3.Bucket(this, 'MyBucket');
new s3deploy.BucketDeployment(this, 'DeployWebsite', {
    sources: [s3deploy.Source.asset('./website')],
    destinationBucket: bucket,
});
