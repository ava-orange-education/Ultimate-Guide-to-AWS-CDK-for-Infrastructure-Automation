import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as ec2 from 'aws-cdk-lib/aws-ec2';

class MyVpcConstruct extends Construct {
    public readonly vpc: ec2.Vpc;
    constructor(scope: Construct, id: string) {
        super(scope, id);
        this.vpc = new ec2.Vpc(this, 'MyVpc', {
            maxAzs: 2
        });
    }
}

class MyApp extends cdk.App {
    constructor() {
        super();
        const vpcConstruct = new MyVpcConstruct(this, 'VpcConstruct');
        console.log(vpcConstruct.node.path); // Output: MyApp/VpcConstruct
    }
}
