import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CustomS3Lambda } from './custom-s3-lambda';

export class MyCustomStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Instantiate the custom construct
    new CustomS3Lambda(this, 'MyCustomConstruct', {
      bucketName: 'my-custom-bucket'
    });
  }
}
