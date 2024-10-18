const albSG = new ec2.SecurityGroup(this, 'LoadBalancerSG', { vpc });
const appSG = new ec2.SecurityGroup(this, 'AppServerSG', { vpc });
const dbSG = new ec2.SecurityGroup(this, 'DbServerSG', { vpc });

//Allow access to Load Balancer from anywhere
albSG.addIngressRule(ec2.Peer.anyIpv4(), ec2.Port.tcp(80), 'Allow HTTP traffic from the internet');

// Allow only the Load Balancer to access the web server
appSG.addIngressRule(albSG, ec2.Port.tcp(80), 'Allow HTTP traffic from load balancer');

// Allow only the application server to access the database
dbSG.addIngressRule(appSG, ec2.Port.tcp(3306), 'Allow MySQL traffic from app servers');
