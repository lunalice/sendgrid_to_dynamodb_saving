FROM lambci/lambda:build-nodejs12.x

COPY . .

RUN zip -9yr lambda.zip .

CMD aws lambda update-function-code --function-name SampleFunction --zip-file fileb://lambda.zip