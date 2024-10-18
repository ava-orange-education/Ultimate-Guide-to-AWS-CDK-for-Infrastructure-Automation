import * as iam from 'aws-cdk-lib/aws-iam';

const myPolicy = new iam.PolicyStatement({
  actions: ['s3:GetObject', 's3:PutObject'],
  resources: ['arn:aws:s3:::my-bucket/*'],
  effect: iam.Effect.ALLOW,
});
