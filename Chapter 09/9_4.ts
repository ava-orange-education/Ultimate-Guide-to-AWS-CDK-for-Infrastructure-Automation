constructor(scope: cdk.Construct, id: string, props: { versioned?: boolean }) {
    super(scope, id);
    
    if (props.versioned) {
      this.bucket = new s3.Bucket(this, 'VersionedBucket', { versioned: true });
    } else {
      this.bucket = new s3.Bucket(this, 'StandardBucket');
    }
  }
  