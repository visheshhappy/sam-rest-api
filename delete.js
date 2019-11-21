const AWS = require('aws-sdk');
AWS.config.update({region:'eu-west-1'});

const dynamoDb = new AWS.DynamoDB.DocumentClient();

const tableName = process.env.TABLE_NAME;

exports.handler = async(event) => {

    let userid = event.pathParameters.userid;
    let data = await dynamoDb.delete({
        TableName:tableName,
        Key:{
            userid:userid
        }
    }).promise();
    return {
        statusCode : 200,
        body : JSON.stringify({
message : "User deleted successfully"
        })
    };
}