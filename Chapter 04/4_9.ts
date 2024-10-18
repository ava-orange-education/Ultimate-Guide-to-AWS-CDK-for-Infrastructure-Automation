import * as cdkp from 'aws-cdk-lib/pipelines';

const pipeline = new cdkp.CodePipeline(this, 'Pipeline', {
  pipelineName: 'MyAppPipeline',
  synth: new cdkp.ShellStep('Synth', {
    input: cdkp.CodePipelineSource.gitHub('my/repo', 'main'),
    commands: ['npm ci', 'npm run build', 'npx cdk synth'],
  }),
});

// Add stages to deploy stacks in sequence
pipeline.addStage(new NetworkStack(app, 'NetworkStage'));
pipeline.addStage(new ComputeStack(app, 'ComputeStage'));
