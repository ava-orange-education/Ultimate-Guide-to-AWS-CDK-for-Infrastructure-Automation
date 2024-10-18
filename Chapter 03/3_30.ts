const enableNewFeature = this.node.tryGetContext('enableNewFeature');

if (enableNewFeature === true) {  // Comparing to boolean true directly
    new SomeNewFeatureConstruct(this, 'NewFeature');
} else {
    this.node.addWarning('New Feature is disabled');  // CDK warning method
}
