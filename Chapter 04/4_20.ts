import * as elbv2 from 'aws-cdk-lib/aws-elasticloadbalancingv2';

const lb = new elbv2.ApplicationLoadBalancer(this, 'LB', {
  vpc,
  internetFacing: true,
});

const listener = lb.addListener('Listener', {
  port: 80,
  open: true,
});

listener.addTargets('Targets', {
  port: 80,
  targets: [asg],
  healthCheck: { path: '/' },
});
