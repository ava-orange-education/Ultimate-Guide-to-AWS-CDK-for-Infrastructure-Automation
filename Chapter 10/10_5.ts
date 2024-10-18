import * as cdk from 'aws-cdk-lib';
import { Vpc } from 'aws-cdk-lib/aws-ec2';
import { Cluster, ContainerImage, FargateTaskDefinition, FargateService } from 'aws-cdk-lib/aws-ecs';
import { ApplicationLoadBalancer, ApplicationProtocol, ApplicationTargetGroup } from 'aws-cdk-lib/aws-elasticloadbalancingv2';
import { Construct } from 'constructs';

export class EcsApplicationStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create a VPC for the ECS cluster
    const vpc = new Vpc(this, 'Vpc', { maxAzs: 3 });

    // Create an ECS Cluster
    const cluster = new Cluster(this, 'EcsCluster', { vpc });

    // Create a Fargate task definition
    const taskDefinition = new FargateTaskDefinition(this, 'FargateTaskDef');

    // Add a container to the task definition
    taskDefinition.addContainer('AppContainer', {
      image: ContainerImage.fromRegistry('amazon/amazon-ecs-sample'), // Example container image
      memoryLimitMiB: 512,
      cpu: 256,
      logging: new AwsLogDriver({
        streamPrefix: 'ecs-app',
      }),
    });

    // Create a Fargate Service
    const service = new FargateService(this, 'FargateService', {
      cluster,
      taskDefinition,
      desiredCount: 2,
    });

    // Create an Application Load Balancer (ALB) to distribute traffic
    const loadBalancer = new ApplicationLoadBalancer(this, 'ALB', {
      vpc,
      internetFacing: true,
    });

    // Add listener to the load balancer
    const listener = loadBalancer.addListener('Listener', {
      port: 80,
      open: true,
    });

    // Create a target group and add the service as a target
    listener.addTargets('ECS', {
      port: 80,
      targets: [service],
    });

    // Output the Load Balancer URL
    new cdk.CfnOutput(this, 'LoadBalancerURL', {
      value: loadBalancer.loadBalancerDnsName,
    });
  }
}
