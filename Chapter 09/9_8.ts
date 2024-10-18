import { Tags } from 'aws-cdk-lib/core';

const myApp = new App();
const devStack = new Stack(myApp, 'DevStack');
const prodStack = new Stack(myApp, 'ProdStack');

// Apply tags globally to all resources in both stacks
Tags.of(myApp).add('Environment', 'Development');
Tags.of(prodStack).add('Environment', 'Production');
Tags.of(devStack).add('CostCenter', '1234');
