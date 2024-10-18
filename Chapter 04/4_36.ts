const vpc = new VpcStack(app, 'VpcStack');

const ecsStack = new EcsStack(app, 'EcsStack', {
  vpc: vpc.vpc,
});
