class MyApplicationStage extends Stage {
    constructor(scope: Construct, id: string, props?: StageProps) {
      super(scope, id, props);
  
      const s3BucketName = id === 'USEast1' ? 'my-app-us-east-1' : 'my-app-eu-west-1';
      const vpcId = id === 'USEast1' ? 'vpc-123abc' : 'vpc-456def';
  
      new MyApplicationStack(this, 'AppStack', {
        regionConfig: {
          s3BucketName: s3BucketName,
          vpcId: vpcId,
        },
      });
    }
  }
  