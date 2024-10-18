const pipeline = new CodePipeline(this, 'MicroservicesPipeline', {
    synth: new ShellStep('Synth', {
      input: CodePipelineSource.gitHub('my-org/my-repo', 'main'),
      commands: ['npm install', 'npm run build', 'npx cdk synth']
    })
  });
  
  // Add microservices to the pipeline
  const authServiceStage = new AuthServiceStage(this, 'AuthService', {
    env: { account: '123456789012', region: 'us-east-1' }
  });
  
  const orderServiceStage = new OrderServiceStage(this, 'OrderService', {
    env: { account: '123456789012', region: 'us-east-1' }
  });
  
  pipeline.addStage(authServiceStage);
  pipeline.addStage(orderServiceStage);
  