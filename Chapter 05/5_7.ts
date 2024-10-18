const pipeline = new CodePipeline(this, 'Pipeline', {
    pipelineName: 'MultiEnvPipeline',
    synth: new ShellStep('Synth', {
      input: CodePipelineSource.gitHub('my-org/my-repo', 'main'),
      commands: ['npm install', 'npm run build', 'npx cdk synth']
    })
  });
  
  const devStage = pipeline.addStage(new MyApplicationStage(this, 'Dev', {
    env: { account: '123456789012', region: 'us-east-1' }
  }));
  
  const prodStage = pipeline.addStage(new MyApplicationStage(this, 'Production', {
    env: { account: '123456789014', region: 'us-east-1' }
  }));
  