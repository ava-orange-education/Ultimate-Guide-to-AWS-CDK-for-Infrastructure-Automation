import { Ec2Service, Ec2TaskDefinition } from 'aws-cdk-lib/aws-ecs';
import { InstanceType } from 'aws-cdk-lib/aws-ec2';

// Create an EC2 task definition
const ec2TaskDefinition = new Ec2TaskDefinition(this, 'EC2TaskDef');

// Add a container to the task definition
ec2TaskDefinition.addContainer('AppContainer', {
  image: ContainerImage.fromRegistry('amazon/amazon-ecs-sample'),
  memoryLimitMiB: 512,
  cpu: 256,
  logging: new AwsLogDriver({
    streamPrefix: 'ecs-app',
  }),
});

// Create an EC2 Service using the task definition
const ec2Service = new Ec2Service(this, 'EC2Service', {
  cluster,
  taskDefinition: ec2TaskDefinition,
  desiredCount: 2,
  instanceType: new InstanceType('t2.micro'),
});
