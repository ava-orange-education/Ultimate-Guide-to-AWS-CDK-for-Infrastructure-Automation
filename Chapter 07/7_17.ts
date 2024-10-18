const task = new sfnTasks.LambdaInvoke(this, 'Invoke Lambda', {
    lambdaFunction: myFunction,
  });
  
  task.addRetry({
    maxAttempts: 3,
    interval: cdk.Duration.seconds(5),
  });
  