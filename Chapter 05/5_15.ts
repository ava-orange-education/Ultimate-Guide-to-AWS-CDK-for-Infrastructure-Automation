const ecsService = new ecsPatterns.ApplicationLoadBalancedFargateService(this, 'EcsService', {
    cluster,
    taskDefinition,
  });
  
  const ecsApplication = new codedeploy.EcsApplication(this, 'EcsApplication');
  
  const ecsDeploymentGroup = new codedeploy.EcsDeploymentGroup(this, 'CanaryDeployment', {
    service: ecsService.service,
    deploymentConfig: codedeploy.EcsDeploymentConfig.CANARY_10PERCENT_15MINUTES,
    application: ecsApplication,
    loadBalancer: ecsService.loadBalancer,
    targetGroups: [ecsService.targetGroup],
  });
  