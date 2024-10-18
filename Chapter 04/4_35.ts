import * as cdk from 'aws-cdk-lib';

export abstract class BaseStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    // Common setup logic, e.g., logging, monitoring
  }
}

// Example of extending the base stack
export class MyServiceStack extends BaseStack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Service-specific resources
  }
}
