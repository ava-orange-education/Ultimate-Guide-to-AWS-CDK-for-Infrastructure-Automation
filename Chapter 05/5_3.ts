const sourceAction = new codepipeline_actions.GitHubSourceAction({
    actionName: 'GitHub_Source',
    owner: 'my-org',
    repo: 'my-repo',
    branch: 'main',
    oauthToken: cdk.SecretValue.secretsManager('github-token'),
    output: sourceOutput,
  });
  