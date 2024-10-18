import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

class MyApp extends cdk.App {
    constructor() {
        super();
        // Initialize multiple stacks
        new StackA(this, 'StackA');
        new StackB(this, 'StackB');
    }
}

const app = new MyApp();
