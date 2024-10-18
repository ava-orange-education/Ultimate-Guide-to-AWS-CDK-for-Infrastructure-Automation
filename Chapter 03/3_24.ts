import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

class MyStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);
        const instanceType = this.node.tryGetContext('instanceType') || 't2.micro';
        new ec2.Instance(this, 'MyInstance', {
            instanceType: new ec2.InstanceType(instanceType),
            machineImage: new ec2.AmazonLinuxImage(),
            vpc,
        });
    }
}

const app = new cdk.App();
app.node.setContext('env', 'prod');
new MyStack(app, 'MyStack');
