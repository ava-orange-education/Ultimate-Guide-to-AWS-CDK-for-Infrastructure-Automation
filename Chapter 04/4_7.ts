const privateRouteTable = vpc.privateSubnets[0].routeTable;
const targetNetworkInterface = new ec2.CfnNetworkInterface(this, 'TargetInterface', { subnetId: vpc.privateSubnets[1].subnetId, });
new ec2.CfnRoute(this, 'InterSubnetTraffic', {
   routeTableId: privateRouteTable.routeTableId,
   destinationCidrBlock: '10.0.0.0/16',
   networkInterfaceId: targetNetworkInterface.attrId
});
