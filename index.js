const AWS = require('aws-sdk');

exports.handler = async (event) => {
  console.log('Event:', JSON.stringify(event, null, 2));

  const response = {
    statusCode: 200,
    body: JSON.stringify('Hello from Lambda!'),
  };
  return response;
};
