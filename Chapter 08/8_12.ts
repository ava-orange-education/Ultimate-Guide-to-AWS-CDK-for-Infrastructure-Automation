import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';
import * as codepipeline_actions from 'aws-cdk-lib/aws-codepipeline-actions';
import * as codebuild from 'aws-cdk-lib/aws-codebuild'; 
import * as cdk from 'aws-cdk-lib'; 
import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class CustomConstructPipeline extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const sourceOutput = new codepipeline.Artifact();

    const pipeline = new codepipeline.Pipeline(this, 'CustomConstructPipeline', {
      pipelineName: 'CustomConstructCI',
      stages: [
        {
          stageName: 'Source',
          actions: [
            new codepipeline_actions.GitHubSourceAction({
              actionName: 'GitHub_Source',
              output: sourceOutput,
              oauthToken: cdk.SecretValue.secretsManager('my-github-token'), // More secure token retrieval
              owner: 'my-github-username',
              repo: 'my-custom-construct-repo',
              branch: 'main'
            })
          ]
        },
        {
          stageName: 'Build',
          actions: [
            new codepipeline_actions.CodeBuildAction({
              actionName: 'CodeBuild',
              project: new codebuild.PipelineProject(this, 'BuildProject'),
              input: sourceOutput
            })
          ]
        }
      ]
    });
  }
}
