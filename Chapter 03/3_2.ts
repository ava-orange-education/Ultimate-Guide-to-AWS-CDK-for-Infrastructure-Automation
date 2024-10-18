import * as ec2 from 'aws-cdk-lib/aws-ec2';
import { Construct } from 'constructs';

export class SecurityGroupConstruct extends Construct {
  public readonly securityGroup: ec2.SecurityGroup;
  constructor(scope: Construct, id: string, vpc: ec2.Vpc) {
    super(scope, id);
    this.securityGroup = new ec2.SecurityGroup(this, 'MySecurityGroup', {
      vpc,
      allowAllOutbound: true,
    });
    this.securityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(80), 'Allow HTTP traffic');
    this.securityGroup.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(443), 'Allow HTTPS traffic');
  }
}
