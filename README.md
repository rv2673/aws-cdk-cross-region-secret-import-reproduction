# aws-cdk-cross-region-secret-import-reproduction

This repository contain minimal setup to reproduce for
aws-cdk issue with cross-region policy reference of imported secret

## Issue
The following policy statement is created (through grantRead)
```
"Statement": [
      {
       "Action": [
        "secretsmanager:DescribeSecret",
        "secretsmanager:GetSecretValue"
       ],
       "Effect": "Allow",
       "Resource": "arn:aws:secretsmanager:eu-central-1:123456789:secret:secret-name-suffix-??????"
      }
]
```

While this the policy that is expected and works(and was generated before <2.89):
```
"Statement": [
      {
       "Action": [
        "secretsmanager:DescribeSecret",
        "secretsmanager:GetSecretValue"
       ],
       "Effect": "Allow",
       "Resource": "arn:aws:secretsmanager:eu-central-1:123456789:secret:secret-name-suffix"
      }
]
```

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npm run cdk deploy`      deploy this stack to your default AWS account/region
* `npm run cdk diff`        compare deployed stack with current state
* `npm run cdk synth`       emits the synthesized CloudFormation template
