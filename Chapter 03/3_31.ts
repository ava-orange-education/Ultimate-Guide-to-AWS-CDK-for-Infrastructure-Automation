const enableMonitoring = this.node.tryGetContext('enableMonitoring');

// Convert the string to a boolean
if (enableMonitoring === 'true') {
    new MonitoringStack(this, 'MonitoringStack');
}
