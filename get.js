const AWS = require('aws-sdk');
AWS.config.update({region:'eu-west-1'});

const dynamoDb = new AWS.DynamoDB.DocumentClient();

const tableName = process.env.TABLE_NAME;

exports.handler = async(event) => {
    let userid = event.pathParameters.userid;
    let data = await dynamoDb.get({
        TableName:tableName,
        Key:{
            userid:userid
        }
    }).promise();

    if(data.Item){
        return {
            statusCode : 200,
            body : JSON.stringify(data.Item)
        };
    }else{
        return {
            statusCode : 404,
            body : JSON.stringify({
                message : "user not found"
            })
        };
    }
    
}