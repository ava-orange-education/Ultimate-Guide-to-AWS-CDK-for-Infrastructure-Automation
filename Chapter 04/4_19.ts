import * as asg from 'aws-cdk-lib/aws-autoscaling'

const vpc = new ec2.Vpc(this, "vpc")
    // Use the imported VPC in your resources
    const autoscalinggroup = new asg.AutoScalingGroup(this, 'ASG', {
        vpc,
        instanceType: ec2.InstanceType.of(ec2.InstanceClass.T3, ec2.InstanceSize.MICRO),
        machineImage: ec2.MachineImage.latestAmazonLinux2(),
        minCapacity: 1,
        maxCapacity: 5,
      });
