const buildAction = new codepipeline_actions.CodeBuildAction({
    actionName: 'Build',
    project: new codebuild.PipelineProject(this, 'BuildProject', {
      buildSpec: codebuild.BuildSpec.fromObject({
        version: '0.2',
        phases: {
          install: {
            commands: ['npm install'],
          },
          build: {
            commands: ['npm run build'],
          },
        },
        artifacts: {
          files: ['**/*'], 'base-directory': 'dist',
        },
      }),
    }),
    input: sourceOutput,
  });
  