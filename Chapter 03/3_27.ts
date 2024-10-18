import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as path from 'path';

const myTaskDefinition = new ecs.FargateTaskDefinition(this, 'TaskDef');
const container = myTaskDefinition.addContainer('MyContainer', {
    image: ecs.ContainerImage.fromAsset(path.join(__dirname, 'docker')),
    memoryLimitMiB: 512,  // Optional: Define memory limit
    cpu: 256,             // Optional: Define CPU units
});
