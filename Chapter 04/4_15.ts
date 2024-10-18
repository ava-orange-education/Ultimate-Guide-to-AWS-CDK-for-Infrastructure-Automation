import * as route53 from 'aws-cdk-lib/aws-route53';
import * as targets from 'aws-cdk-lib/aws-route53-targets';
import * as cloudfront from 'aws-cdk-lib/aws-cloudfront';
import * as cloudfront_origins from 'aws-cdk-lib/aws-cloudfront-origins';

// Define your CloudFront distribution
const distribution = new cloudfront.Distribution(this, 'FrontendDistribution', {
      defaultBehavior: {
        origin: new cloudfront_origins.S3Origin(this.bucket),
        viewerProtocolPolicy: cloudfront.ViewerProtocolPolicy.REDIRECT_TO_HTTPS, // Redirect HTTP to HTTPS
        cachePolicy: cloudfront.CachePolicy.CACHING_OPTIMIZED, // Use optimized caching for static content
      },
    });


// create hosted zone
const hostedZone = new route53.HostedZone(this, 'HostedZone', {
  zoneName: 'example.com',
});

// Create an A record pointing to the CloudFront distribution
new route53.ARecord(this, 'AliasRecord', {
  zone: hostedZone,
  target: route53.RecordTarget.fromAlias(new targets.CloudFrontTarget(distribution)),
  recordName: 'www', // This creates "www.yourdomain.com"
});
