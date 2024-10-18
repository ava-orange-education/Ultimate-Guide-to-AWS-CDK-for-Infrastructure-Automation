import * as cdk from 'aws-cdk-lib';
import { CodePipeline, CodePipelineSource, ShellStep } from 'aws-cdk-lib/pipelines';

export class MyPipelineStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const pipeline = new CodePipeline(this, 'Pipeline', {
      pipelineName: 'MyApplicationPipeline',
      synth: new ShellStep('Synth', {
        input: CodePipelineSource.gitHub('my-org/my-repo', 'main'), // Replace with your GitHub repo
        commands: ['npm install', 'npm run build', 'npx cdk synth']
      })
    });
  }
}
