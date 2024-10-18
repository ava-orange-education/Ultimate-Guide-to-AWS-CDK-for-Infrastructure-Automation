import * as codebuild from 'aws-cdk-lib/aws-codebuild';
import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';
import * as codepipeline_actions from 'aws-cdk-lib/aws-codepipeline-actions';
import { Stack, StackProps } from 'aws-cdk-lib';
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class MyPipelineStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    // Define the pipeline
    const pipeline = new codepipeline.Pipeline(this, 'MyPipeline', {
      pipelineName: 'MyAdvancedPipeline',
    });
    // Source stage
    const sourceOutput = new codepipeline.Artifact();
    pipeline.addStage({
      stageName: 'Source',
      actions: [
        new codepipeline_actions.GitHubSourceAction({
          actionName: 'GitHub_Source',
          owner: 'my-org',
          repo: 'my-repo',
          branch: 'main',
          oauthToken: cdk.SecretValue.secretsManager('github-token'),
          output: sourceOutput,
        }),
      ],
    });
    // Build stage
    const buildProject = new codebuild.PipelineProject(this, 'BuildProject', {
      buildSpec: codebuild.BuildSpec.fromSourceFilename('buildspec.yml'),
    });
    pipeline.addStage({
      stageName: 'Build',
      actions: [
        new codepipeline_actions.CodeBuildAction({
          actionName: 'CodeBuild',
          project: buildProject,
          input: sourceOutput,
        }),
      ],
    });
    // Further stages can be added here...
  }
}
