import * as ec2 from 'aws-cdk-lib/aws-ec2';
import * as elasticache from 'aws-cdk-lib/aws-elasticache';

const vpc = new ec2.Vpc(this, 'Vpc');

// Allow inbound traffic on Redis default port (6379) from within the VPC
securityGroup.addIngressRule(
  ec2.Peer.ipv4(vpc.vpcCidrBlock),
  ec2.Port.tcp(6379),
  'Allow inbound traffic on port 6379 from within the VPC'
);

// Create a subnet group for Redis
const subnetGroup = new elasticache.CfnSubnetGroup(this, 'RedisSubnetGroup', {
  description: 'Subnet group for Redis',
  subnetIds: vpc.selectSubnets({ subnetType: ec2.SubnetType.PRIVATE_WITH_EGRESS }).subnetIds,
});

// Create the Redis cluster
const redisCluster = new elasticache.CfnCacheCluster(this, 'RedisCluster', {
  engine: 'redis',
  cacheNodeType: 'cache.t3.micro',
  numCacheNodes: 1,
  clusterName: 'my-redis-cluster',
  vpcSecurityGroupIds: [securityGroup.securityGroupId], // Reference to the security group
  cacheSubnetGroupName: subnetGroup.ref, // Reference to the subnet group
});
