# Run the following command to validate the sam.yaml

sam validate

# if the sam validate passes then run

# this will upload the package in the s3 bucket specified above.
sam package --template-file template.yaml --output-template-file sam.yaml --s3-bucket vishesh-sam


# then run the deploy command
# This will deploy and will create cloud formatiion stack.. check aws cloud formation to monitor the progress after running this command
sam deploy --template-file sam.yaml --stack-name sam-rest-api --capabilities CAPABILITY_IAM

#Also make sure ur aws credentials are saved and you have followed the steps to install sam in ur machine..
#Follow this if you have not : https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html
