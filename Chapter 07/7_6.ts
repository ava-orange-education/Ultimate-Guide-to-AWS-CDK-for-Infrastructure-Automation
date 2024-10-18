import { mockClient } from 'aws-sdk-client-mock';
import { DynamoDBClient, PutItemCommand } from '@aws-sdk/client-dynamodb';
import { MyLambdaFunction } from '../lib/my-lambda-function';

const dynamoMock = mockClient(DynamoDBClient);

test('Lambda writes to DynamoDB', async () => {
  dynamoMock.on(PutItemCommand).resolves({});

  const result = await MyLambdaFunction.handler({ /* event data */ });
  expect(dynamoMock).toHaveReceivedCommandWith(PutItemCommand, {
    TableName: 'MyTable',
    Item: {
      PK: { S: '123' },
      Data: { S: 'Sample data' },
    },
  });
});
