// Stack 1: NetworkStack - defines the VPC
export class NetworkStack extends cdk.Stack {
    public readonly vpc: ec2.Vpc;
  
    constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
      super(scope, id, props);
  
      this.vpc = new ec2.Vpc(this, 'MyVpc', {
        cidr: '10.0.0.0/16',
        maxAzs: 3,
      });
    }
  }
  
  // Stack 2: ComputeStack - uses the VPC from NetworkStack
  export class ComputeStack extends cdk.Stack {
    constructor(scope: cdk.Construct, id: string, props: cdk.StackProps, vpc: ec2.Vpc) {
      super(scope, id, props);
  
      const instance = new ec2.Instance(this, 'MyInstance', {
        vpc,
        instanceType: new ec2.InstanceType('t3.micro'),
        machineImage: new ec2.AmazonLinuxImage(),
      });
    }
  }
  