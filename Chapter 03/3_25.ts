const environment = app.node.tryGetContext('env');

if (environment === 'prod') {
    new MyProductionStack(app, 'ProdStack');
} else {
    new MyDevelopmentStack(app, 'DevStack');
}
