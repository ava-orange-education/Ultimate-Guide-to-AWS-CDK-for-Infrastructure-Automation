import * as dynamodb from 'aws-cdk-lib/aws-dynamodb';

new dynamodb.Table(this, 'MyTable', {
    tableName: 'MyApp-UserTable',
    partitionKey: { name: 'UserID', type: dynamodb.AttributeType.STRING },
});
