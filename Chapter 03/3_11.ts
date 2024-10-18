import * as cdk from 'aws-cdk-lib';

class StackA extends cdk.Stack {
    constructor(scope: cdk.App, id: string) {
        super(scope, id);
        // Define resources for StackA
    }
}

class StackB extends cdk.Stack {
    constructor(scope: cdk.App, id: string) {
        super(scope, id);
        // Define resources for StackB
    }
}

const app = new cdk.App();
const stackA = new StackA(app, 'StackA');
const stackB = new StackB(app, 'StackB');

stackB.addDependency(stackA);
