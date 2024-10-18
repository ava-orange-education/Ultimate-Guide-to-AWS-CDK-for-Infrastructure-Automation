import * as cdk from 'aws-cdk-lib';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

class MyStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);
        // Define a parameter for the VPC CIDR
        const vpcCidr = new cdk.CfnParameter(this, 'VpcCidr', {
            type: 'String',
            default: '10.0.0.0/16',
            description: 'The CIDR block for the VPC',
        });
        // Use the parameter value in a VPC
        new ec2.Vpc(this, 'MyVpc', {
            cidr: vpcCidr.valueAsString,
        });
    }
}
