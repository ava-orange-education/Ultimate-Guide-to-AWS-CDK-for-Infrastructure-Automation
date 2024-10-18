const environment = this.node.tryGetContext('environment') || 'dev';
new s3.Bucket(this, `MyBucket-${environment}`);
