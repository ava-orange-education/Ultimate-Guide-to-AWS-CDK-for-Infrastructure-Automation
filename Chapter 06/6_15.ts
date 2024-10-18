const timeBasedPolicy = new iam.PolicyStatement({
    actions: ['ec2:StartInstances', 'ec2:StopInstances'],
    resources: ['*'],
    conditions: {
      'DateGreaterThan': { 'aws:CurrentTime': '2024-09-01T00:00:00Z' },
      'DateLessThan': { 'aws:CurrentTime': '2024-09-30T23:59:59Z' },
    },
  });
  
  const ec2Role = new iam.Role(this, 'EC2TimeBasedRole', {
    assumedBy: new iam.ServicePrincipal('ec2.amazonaws.com'),
    inlinePolicies: {
      'TimeBasedAccess': new iam.PolicyDocument({
        statements: [timeBasedPolicy],
      }),
    },
  });
  