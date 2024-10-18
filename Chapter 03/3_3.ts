import * as iam from 'aws-cdk-lib/aws-iam';
import { Construct } from 'constructs';

export class IamConstruct extends Construct {
  public readonly role: iam.Role;
  constructor(scope: Construct, id: string) {
    super(scope, id);
    this.role = new iam.Role(this, 'MyRole', {
      assumedBy: new iam.ServicePrincipal('ec2.amazonaws.com'),
    });
    this.role.addToPolicy(new iam.PolicyStatement({
      effect: iam.Effect.ALLOW,
      actions: ['s3:GetObject'],
      resources: ['arn:aws:s3:::mybucket/*'],
    }));
  }
}
