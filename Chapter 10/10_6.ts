import { ScalableTaskCount } from 'aws-cdk-lib/aws-applicationautoscaling';

// Configure autoscaling for ECS service
const scalableTarget = service.autoScaleTaskCount({
  minCapacity: 2,
  maxCapacity: 10,
});

// Add scaling policy based on CPU utilization
scalableTarget.scaleOnCpuUtilization('CpuScaling', {
  targetUtilizationPercent: 70,
});
