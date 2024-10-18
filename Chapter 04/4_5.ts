const nacl = new ec2.NetworkAcl(this, 'PublicSubnetNACL', {
    vpc,
    subnetSelection: { subnets: vpc.publicSubnets },
  });
  
  // Allow inbound HTTP traffic
  nacl.addEntry('AllowInboundHTTP', {
    cidr: ec2.AclCidr.anyIpv4(),
    ruleNumber: 100,
    traffic: ec2.AclTraffic.tcpPort(80),
    direction: ec2.TrafficDirection.INGRESS,
    ruleAction: ec2.Action.ALLOW,
  });
  
  // Deny all other inbound traffic
  nacl.addEntry('DenyAllInbound', {
    cidr: ec2.AclCidr.anyIpv4(),
    ruleNumber: 200,
    traffic: ec2.AclTraffic.allTraffic(),
    direction: ec2.TrafficDirection.INGRESS,
    ruleAction: ec2.Action.DENY,
  });
  