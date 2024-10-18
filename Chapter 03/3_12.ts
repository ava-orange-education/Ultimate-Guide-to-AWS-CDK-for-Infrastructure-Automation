import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

class NetworkingStack extends cdk.Stack {
    public readonly vpc: ec2.Vpc;

    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);
        this.vpc = new ec2.Vpc(this, 'MyVpc', {
            maxAzs: 3
        });
        // Export the VPC ID
        new cdk.CfnOutput(this, 'VpcId', {
            value: this.vpc.vpcId,
            exportName: 'VpcId'
        });
    }
}

class StorageStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);
        // Import the VPC ID from the NetworkingStack
        const vpcId = cdk.Fn.importValue('VpcId');
        const vpc = ec2.Vpc.fromLookup(this, 'ImportedVpc', { vpcId });
        new s3.Bucket(this, 'MyBucket', {
            removalPolicy: cdk.RemovalPolicy.DESTROY,
        });
    }
}

const app = new cdk.App();
const networkingStack = new NetworkingStack(app, 'NetworkingStack');
const storageStack = new StorageStack(app, 'StorageStack');
storageStack.addDependency(networkingStack);
