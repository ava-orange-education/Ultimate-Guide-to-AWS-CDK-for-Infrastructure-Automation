import * as cdk from 'aws-cdk-lib';
import * as codepipeline from 'aws-cdk-lib/aws-codepipeline';
import * as codepipeline_actions from 'aws-cdk-lib/aws-codepipeline-actions';
import * as codebuild from 'aws-cdk-lib/aws-codebuild'; // Import CodeBuild if you're using it

// Define an output artifact for the source stage
const sourceOutput = new codepipeline.Artifact();

// Define a CodeBuild project (you need to create this before using it)
const buildProject = new codebuild.Project(this, 'BuildProject', {
  // CodeBuild project properties here
});

const pipeline = new codepipeline.Pipeline(this, 'Pipeline', {
    stages: [
        {
            stageName: 'Source',
            actions: [
                new codepipeline_actions.GitHubSourceAction({
                    actionName: 'GitHub_Source',
                    owner: 'my-owner',
                    repo: 'my-repo',
                    branch: 'main',
                    oauthToken: cdk.SecretValue.secretsManager('github-token'),
                    output: sourceOutput,
                }),
            ],
        },
        {
            stageName: 'Build',
            actions: [
                new codepipeline_actions.CodeBuildAction({
                    actionName: 'Build',
                    project: buildProject,
                    input: sourceOutput,
                }),
            ],
        },
    ],
});
