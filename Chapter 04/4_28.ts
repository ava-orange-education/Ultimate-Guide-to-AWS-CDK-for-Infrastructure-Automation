const table = new dynamodb.Table(this, 'MyTable', {
    partitionKey: { name: 'id', type: dynamodb.AttributeType.STRING },
    stream: dynamodb.StreamViewType.NEW_AND_OLD_IMAGES, // Set the stream configuration here
    billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
  });
  