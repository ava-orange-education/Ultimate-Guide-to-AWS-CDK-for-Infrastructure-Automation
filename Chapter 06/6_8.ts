import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';
import * as rds from 'aws-cdk-lib/aws-rds';
import * as cdk from 'aws-cdk-lib';

export class MyAutoSecureStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Retrieve an existing secret from Secrets Manager
    const secret = secretsmanager.Secret.fromSecretNameV2(this, 'MyDbSecret', 'prod/db-secret');

    // Automatically retrieve and use the secret in an RDS resource
    new rds.DatabaseInstance(this, 'MyDatabase', {
      engine: rds.DatabaseInstanceEngine.postgres({
        version: rds.PostgresEngineVersion.VER_13_3
      }),
      credentials: rds.Credentials.fromSecret(secret),
      // other necessary database properties like instance type, VPC, etc.
    });
  }
}
