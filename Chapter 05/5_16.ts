const smokeTestProject = new codebuild.PipelineProject(this, 'SmokeTests', {
    buildSpec: codebuild.BuildSpec.fromObject({
      version: '0.2',
      phases: {
        install: { commands: ['npm install'] },
        build: { commands: ['npm run smoke-test'] }
      }
    }),
  });
  
  pipeline.addStage({
    stageName: 'Test',
    actions: [
      new codepipeline_actions.CodeBuildAction({
        actionName: 'SmokeTests',
        project: smokeTestProject,
        input: sourceOutput, // Ensure sourceOutput is correctly defined earlier in your pipeline
      }),
    ],
  });
  