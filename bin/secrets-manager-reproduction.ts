#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';

const SECRET_COMPLETE_ARN = 'arn:aws:secretsmanager:eu-central-1:123456789:secret:secret-name-suffix'

const app = new cdk.App();

const containingStack = new cdk.Stack(app, 'containing', {env: {
  region: 'eu-central-1'
}})
const secret = cdk.aws_secretsmanager.Secret.fromSecretCompleteArn(
  containingStack, 'secret', SECRET_COMPLETE_ARN
)

const consumingStack = new cdk.Stack(app, 'consuming', {env: {
  region: 'us-east-1'
}})

const lambdaRole = new cdk.aws_iam.Role(consumingStack, 'Role', {
  assumedBy: new cdk.aws_iam.ServicePrincipal('lambda.amazonaws.com'),
});

secret.grantRead(lambdaRole)
