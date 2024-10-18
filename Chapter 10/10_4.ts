import * as cloudwatch from 'aws-cdk-lib/aws-cloudwatch';

// Create a metric for Lambda invocations
const lambdaInvocationMetric = processFileLambda.metric('Invocations');

// Create an alarm to monitor if Lambda invocations exceed a certain threshold
new cloudwatch.Alarm(this, 'HighLambdaInvocationAlarm', {
  metric: lambdaInvocationMetric,
  threshold: 100,
  evaluationPeriods: 1,
  alarmDescription: 'Alarm if Lambda invocations exceed 100 within a minute',
});
