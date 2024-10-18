const bootstrapRole = new iam.Role(this, 'BootstrapRole', {
    assumedBy: new iam.ServicePrincipal('cloudformation.amazonaws.com'),
  });
  
  bootstrapRole.addManagedPolicy(
    iam.ManagedPolicy.fromAwsManagedPolicyName('AdministratorAccess')
  );
  