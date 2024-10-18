const deploymentGroup = new codedeploy.LambdaDeploymentGroup(this, 'BlueGreenDeployment', {
    alias: lambdaAlias,
    deploymentConfig: codedeploy.LambdaDeploymentConfig.CANARY_10PERCENT_5MINUTES,
  });
  