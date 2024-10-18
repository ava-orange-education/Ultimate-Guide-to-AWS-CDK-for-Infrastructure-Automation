const authServiceStage = pipeline.addStage(new AuthServiceStage(this, 'AuthService', {
    env: { account: '123456789012', region: 'us-east-1' }
  }));
  
  const orderServiceStage = pipeline.addStage(new OrderServiceStage(this, 'OrderService', {
    env: { account: '123456789012', region: 'us-east-1' }
  }));
  
  orderServiceStage.addPre(authServiceStage); // Ensure AuthService is deployed before OrderService
  