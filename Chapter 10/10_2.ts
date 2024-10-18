const AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = async (event) => {
    const bucketName = process.env.BUCKET_NAME;

    for (const record of event.Records) {
        const key = record.s3.object.key;
        try {
            const metadata = {
                filename: key,
                timestamp: new Date().toISOString(),
            };

            // Write metadata to the bucket
            await s3.putObject({
                Bucket: bucketName,
                Key: `metadata/${key}.json`,
                Body: JSON.stringify(metadata),
                ContentType: "application/json"
            }).promise();

            console.log(`Metadata stored for file: ${key}`);
        } catch (error) {
            console.error(`Error processing file ${key}:`, error);
            throw error;
        }
    }
};
