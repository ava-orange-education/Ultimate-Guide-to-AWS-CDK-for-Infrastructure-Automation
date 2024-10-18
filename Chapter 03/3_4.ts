import * as rds from 'aws-cdk-lib/aws-rds';
import { Construct } from 'constructs';
import { Vpc } from 'aws-cdk-lib/aws-ec2';

export class DatabaseConstruct extends Construct {
  public readonly database: rds.DatabaseInstance;
  constructor(scope: Construct, id: string, vpc: Vpc) {
    super(scope, id);
    this.database = new rds.DatabaseInstance(this, 'MyDatabase', {
      engine: rds.DatabaseInstanceEngine.postgres({
        version: rds.PostgresEngineVersion.VER_13_4,
      }),
      vpc,
      instanceType: ec2.InstanceType.of(ec2.InstanceClass.T3, ec2.InstanceSize.MICRO),
      allocatedStorage: 20,
      storageEncrypted: true,
      backupRetention: cdk.Duration.days(7),
    });
  }
}
