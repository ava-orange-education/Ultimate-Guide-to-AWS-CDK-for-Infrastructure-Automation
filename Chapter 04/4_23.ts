import * as rds from 'aws-cdk-lib/aws-rds';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

const vpc = new ec2.Vpc(this, 'Vpc');

const dbInstance = new rds.DatabaseInstance(this, 'RdsInstance', {
  engine: rds.DatabaseInstanceEngine.postgres({
    version: rds.PostgresEngineVersion.VER_14_2,
  }),
  vpc,
  allocatedStorage: 100,
  instanceType: ec2.InstanceType.of(ec2.InstanceClass.BURSTABLE3, ec2.InstanceSize.MICRO),
  storageEncrypted: true,
  backupRetention: cdk.Duration.days(7),
  deletionProtection: false,
  publiclyAccessible: false,
  vpcSubnets: {
    subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS,
  },
});
