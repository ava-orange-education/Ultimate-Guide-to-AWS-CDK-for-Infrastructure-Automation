import * as iam from 'aws-cdk-lib/aws-iam';

// Create an IAM Role for Lambda execution
const role = new iam.Role(this, 'LambdaExecutionRole', {
    assumedBy: new iam.ServicePrincipal('lambda.amazonaws.com'),
    managedPolicies: [
        iam.ManagedPolicy.fromAwsManagedPolicyName('service-role/AWSLambdaBasicExecutionRole')
    ]
});

// Grant the Lambda role read access to the S3 bucket
bucket.grantRead(role);
