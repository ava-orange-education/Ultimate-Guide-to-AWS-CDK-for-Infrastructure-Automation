cluster and container performance.
import { LogGroup, RetentionDays } from 'aws-cdk-lib/aws-logs';
import { Alarm, Metric } from 'aws-cdk-lib/aws-cloudwatch';

// Create a CloudWatch Log Group for ECS application
const logGroup = new LogGroup(this, 'ECSLogGroup', {
  logGroupName: '/ecs/app',
  retention: RetentionDays.ONE_WEEK,
});

// CloudWatch Alarm for High CPU Utilization
const cpuAlarm = new Alarm(this, 'CpuAlarm', {
  metric: new Metric({
    namespace: 'AWS/ECS',
    metricName: 'CPUUtilization',
    dimensionsMap: {
      ClusterName: cluster.clusterName,
    },
    statistic: 'Average',
    period: cdk.Duration.minutes(1),
  }),
  threshold: 80,
  evaluationPeriods: 2,
  alarmDescription: 'Alarm if CPU utilization exceeds 80% for two minutes',
});
