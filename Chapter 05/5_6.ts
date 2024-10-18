pipeline.addStage({
    stageName: 'Deploy',
    actions: [
      new codepipeline_actions.S3DeployAction({
        actionName: 'S3_Deploy',
        bucket: deployBucket,
        input: buildOutput,
      }),
    ],
  });
  