import * as iam from 'aws-cdk-lib/aws-iam';
// Use this role in your deployment stage
const deployRole = new iam.Role(this, 'CrossAccountDeployRole', {
  assumedBy: new iam.AccountPrincipal('123456789012'), // Account ID of the pipeline
  roleName: 'MyCrossAccountRole', // Ensure this name is unique within the account
  managedPolicies: [iam.ManagedPolicy.fromAwsManagedPolicyName('AdministratorAccess')],
});
