const e2eTestProject = new codebuild.PipelineProject(this, 'E2ETests', {
    buildSpec: codebuild.BuildSpec.fromSourceFilename('e2e-test.yml'),
  });
  
  pipeline.addStage({
    stageName: 'Staging',
    actions: [
      new codepipeline_actions.CodeBuildAction({
        actionName: 'E2ETests',
        project: e2eTestProject,
        input: sourceOutput, // Ensure this is defined earlier in your pipeline
      }),
    ],
  });
  