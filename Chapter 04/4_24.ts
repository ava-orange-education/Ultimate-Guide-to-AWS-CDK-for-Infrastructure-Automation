const dbInstance1 = new rds.DatabaseInstance(this, 'RdsInstance', {
    engine: rds.DatabaseInstanceEngine.mysql({
      version: rds.MysqlEngineVersion.VER_8_0_28,
    }),
    vpc,
    multiAz: true,
    allocatedStorage: 100,
    autoMinorVersionUpgrade: true,
    });
    
    // Create a read replica
    const readReplica = new rds.DatabaseInstanceReadReplica(this, 'ReadReplica', {
    sourceDatabaseInstance: dbInstance1,
    vpc,
    instanceType: ec2.InstanceType.of(ec2.InstanceClass.T3, ec2.InstanceSize.MICRO),
    });
    