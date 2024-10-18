const dbInstance = new rds.DatabaseInstance(this, 'RdsInstance', {
    engine: rds.DatabaseInstanceEngine.mysql({ version: rds.MysqlEngineVersion.VER_8_0_28 }),
    vpc,
    instanceType: ec2.InstanceType.of(ec2.InstanceClass.BURSTABLE3, ec2.InstanceSize.SMALL),
    backupRetention: cdk.Duration.days(7),
    monitoringInterval: cdk.Duration.minutes(1),  // Enable enhanced monitoring
    cloudwatchLogsExports: ['error', 'general', 'slowquery'],
  });
  