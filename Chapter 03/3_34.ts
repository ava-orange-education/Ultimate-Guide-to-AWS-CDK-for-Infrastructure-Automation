import * as ecr from 'aws-cdk-lib/aws-ecr';

// Create an ECR repository with a lifecycle policy
const repository = new ecr.Repository(this, 'MyRepository', {
    lifecycleRules: [{ maxImageCount: 10 }]
});
