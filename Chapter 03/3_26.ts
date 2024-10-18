import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as path from 'path';

const myFunction = new lambda.Function(this, 'MyFunction', {
    runtime: lambda.Runtime.NODEJS_14_X,
    handler: 'index.handler',
    code: lambda.Code.fromAsset(path.join(__dirname, 'lambda-fn'), {
        bundling: {
            image: lambda.Runtime.NODEJS_14_X.bundlingImage,
            command: [
                'bash', '-c', 'npm install && npm run build'
            ],
        },
    }),
});
