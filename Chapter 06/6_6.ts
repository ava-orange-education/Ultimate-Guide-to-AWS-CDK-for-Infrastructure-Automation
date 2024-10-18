export class MyAppStack extends cdk.Stack {
    constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
      super(scope, id, props);
  
      const envType = this.node.tryGetContext('envType');
      const apiUrl = this.node.tryGetContext('apiUrl');
  
      // Use context values in your stack resources
      new ssm.StringParameter(this, 'ApiUrlParameter', {
        parameterName: `/config/${envType}/apiUrl`,
        stringValue: apiUrl,
      });
    }
  }
  