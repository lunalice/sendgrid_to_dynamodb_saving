const AWS = require("aws-sdk");

const config = {
  apiVersion: '2012-08-10',
  endpoint: process.env.DYNAMODB_ENDPOINT,
  region: process.env.DYNAMODB_REGION || 'ap-northeast-1',
  credentials: {
    accessKeyId: process.env.DYNAMODB_ACCESS_KEY_ID || 'FAKE',
    secretAccessKey: process.env.DYNAMODB_SECRET_ACCESS_KEY || 'FAKE',
  },
}

const dynamoDB = new AWS.DynamoDB.DocumentClient(config);

exports.handler = async (event, context) => {
  console.log(event);
  var tableName = "sendgrid_sent";
  var item = {
    'email': event.email,
    'timestamp': event.timestamp,
    'event': event.event,
    'smtp-id': event['smtp-id'],
    'useragent': event.useragent,
    'ip': event.ip,
    'sg_event_id': event.sg_event_id,
    'sg_message_id': event.sg_message_id,
    'reason': event.reason,
    'status': event.status,
    'response': event.response,
    'tls': event.tls,
    'url': event.url,
    'category': event.category,
    'asm_group_id': event.asm_group_id,
    'unique_args': event.unique_args,
    'marketing_campaign_id': event.marketing_campaign_id,
    'marketing_campaign_name': event.marketing_campaign_name,
    'attempt': event.attempt,
    'pool': event.pool,
    'sg_machine_open': event.sg_machine_open,
    'bounce_classification': event.bounce_classification,
  };
  var params = {
    TableName: tableName,
    Item: item
  };
  console.log(params);
  dynamoDB.put(params, function(err, data) {
    if (err) {
      context.fail(err);
    } else {
      context.succeed(data);
    }
  });
};
