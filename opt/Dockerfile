FROM lambci/lambda:build-nodejs12.x

COPY . .

RUN npm install

RUN zip -9yr lambda.zip .

CMD aws lambda publish-layer-version \
    --layer-name SampleLayer \
    --compatible-runtimes nodejs12.x \
    --description "" \
    --zip-file fileb://lambda.zip
