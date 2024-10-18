import * as cdk from 'aws-cdk-lib';

class MyStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
        super(scope, id, props);
        // Define resources here
    }
}

const app = new cdk.App();

new MyStack(app, 'MyDevStack', {
    env: { account: '123456789012', region: 'us-west-2' }
});

new MyStack(app, 'MyProdStack', {
    env: { account: '123456789012', region: 'us-east-1' }
});
