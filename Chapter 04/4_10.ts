import * as ssm from 'aws-cdk-lib/aws-ssm';

export class NetworkStack extends cdk.Stack {
  public readonly vpc: ec2.Vpc;

  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, 'MyVpc', { /* VPC configuration */ });

    // Store the VPC ID in SSM Parameter Store
    new ssm.StringParameter(this, 'VpcIdParameter', {
      parameterName: '/myapp/vpc-id',
      stringValue: vpc.vpcId,
    });
  }
}
In another stack, you can retrieve the parameter:
import * as ssm from 'aws-cdk-lib/aws-ssm';

export class ComputeStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Retrieve the VPC ID from SSM Parameter Store
    const vpcId = ssm.StringParameter.valueForStringParameter(this, '/myapp/vpc-id');
    const vpc = ec2.Vpc.fromLookup(this, 'ImportedVpc', { vpcId });

    // Use the VPC for EC2 instances or other resources
    const instance = new ec2.Instance(this, 'MyInstance', {
      vpc,
      instanceType: new ec2.InstanceType('t3.micro'),
      machineImage: new ec2.AmazonLinuxImage(),
    });
  }
}
