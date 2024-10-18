import * as cdk from 'aws-cdk-lib';
import { CodePipeline, ShellStep, CodePipelineSource } from 'aws-cdk-lib/pipelines'; // Add CodePipelineSource import

class MyPipelineStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'Pipeline', {
      pipelineName: 'SelfMutatingPipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('my-org/my-repo', 'main'), // Ensure CodePipelineSource is imported
        commands: ['npm install', 'npm run build', 'npx cdk synth'],
      }),
    });

    // Add application stages
    const deployStage = pipeline.addStage(new MyApplicationStage(this, 'DeployStage'));
  }
}
