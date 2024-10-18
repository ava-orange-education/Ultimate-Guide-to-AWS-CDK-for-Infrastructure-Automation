const publicRouteTable1 = vpc.publicSubnets[0].routeTable;
// Add a route to the internet
new ec2.CfnRoute(this, 'InternetRoute', {
   routeTableId: publicRouteTable1.routeTableId,
   destinationCidrBlock: '0.0.0.0/0',
   gatewayId: vpc.internetGatewayId,
});
