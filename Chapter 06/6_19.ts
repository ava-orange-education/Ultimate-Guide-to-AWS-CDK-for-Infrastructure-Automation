const instance = new ec2.Instance(this, 'MyInstance', {
    vpc,
    securityGroup: mySecurityGroup,
    publicIp: false, // Disable public IP
  });
  