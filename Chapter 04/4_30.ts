const redisCluster = new elasticache.CfnCacheCluster(this, 'RedisCluster', {
    engine: 'redis',
    cacheNodeType: 'cache.t3.micro',
    numCacheNodes: 1,
    preferredMaintenanceWindow: 'sun:05:00-sun:09:00', // Weekly maintenance window
});
