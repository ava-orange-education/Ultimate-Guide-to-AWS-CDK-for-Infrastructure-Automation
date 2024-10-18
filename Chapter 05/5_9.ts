const devEnv = { account: '123456789012', region: 'us-east-1' };
const prodEnv = { account: '123456789014', region: 'us-east-1' };

new MyApplicationStack(app, 'DevStack', { env: devEnv });
new MyApplicationStack(app, 'ProdStack', { env: prodEnv });
