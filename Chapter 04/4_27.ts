const table = new dynamodb.Table(this, 'MyCompositeKeyTable', {
    partitionKey: { name: 'userId', type: dynamodb.AttributeType.STRING },
    sortKey: { name: 'timestamp', type: dynamodb.AttributeType.NUMBER },
  });
  