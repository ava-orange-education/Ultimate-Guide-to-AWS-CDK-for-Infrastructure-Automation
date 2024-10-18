import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';

class StorageConstruct extends Construct {
    public readonly bucket: s3.Bucket;
    constructor(scope: Construct, id: string) {
        super(scope, id);
        this.bucket = new s3.Bucket(this, 'MyBucket', {
            versioned: true,
        });
    }
}

class MyApp extends cdk.App {
    constructor() {
        super();
        const storageConstruct = new StorageConstruct(this, 'StorageConstruct');
    }
}
