import * as cdk from 'aws-cdk-lib';
import * as logs from 'aws-cdk-lib/aws-logs';
import { Construct } from 'constructs';  // Import 'Construct' from the correct module

export class MyStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Create a custom log group
    new logs.LogGroup(this, 'MyCustomLogGroup', {
      logGroupName: '/custom/log-group',
      retention: logs.RetentionDays.ONE_WEEK
    });
  }
}
