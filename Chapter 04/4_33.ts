import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';

const dbPassword = secretsmanager.Secret.fromSecretNameV2(this, 'DBPassword', 'mydbpassword').secretValue;
