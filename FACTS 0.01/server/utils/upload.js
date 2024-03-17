const aws = require('aws-sdk');
const s3 = new aws.S3();

const upload = async (imageUrl) => {
  const buffer = Buffer.from(await (await fetch(imageUrl)).arrayBuffer());

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `images/${Date.now()}.png`,
    Body: buffer,
    ContentType: 'image/png',
  };

  const uploadResult = await s3.upload(params).promise();
  return uploadResult.Location;
};

module.exports = upload;