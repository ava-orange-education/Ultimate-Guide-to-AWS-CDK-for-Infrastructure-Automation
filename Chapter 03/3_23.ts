import * as secretsmanager from 'aws-cdk-lib/aws-secretsmanager';

const dbPassword = secretsmanager.Secret.fromSecretNameV2(this, 'DBPassword', 'my-db-password');
new rds.DatabaseInstance(this, 'MyDatabase', {
    engine: rds.DatabaseInstanceEngine.POSTGRES,
    credentials: rds.Credentials.fromSecret(dbPassword),
    vpc,
});
