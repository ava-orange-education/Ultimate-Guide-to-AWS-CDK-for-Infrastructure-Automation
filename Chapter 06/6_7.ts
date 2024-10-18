import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';
import * as ssm from 'aws-cdk-lib/aws-ssm';

export class MySecureStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Retrieve the secret from Secrets Manager
    const secret = secretsmanager.Secret.fromSecretNameV2(this, 'MyApiSecret', 'prod/api-secret');

    // Store the secret in SSM Parameter Store
    new ssm.StringParameter(this, 'ApiSecretParameter', {
      parameterName: '/config/production/apiSecret',
      stringValue: secret.secretValue.unsafeUnwrap(), // Convert SecretValue to a string
    });
  }
}
