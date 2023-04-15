# AWS CodePipeline Example Project

## Introduction

### `pipeline_template.yml`
This CloudFormation template creates the necessary resources for the CodePipeline which includes the three stages 

1. Source
2. Build
3. Deploy stages

All the required IAM roles associated with these stages are defined within the template.

### `lambda_template.yaml`
This template defines the deployment configurations for our sample nodejs lambda. Along with our lambda we also attach appropriate Iam role with policy specifying permissions for cloudwatch logs access.

## Depolyment
To deploy the pipeline, use the above template `pipeline_template.yaml`, and run the following AWS CLI command:

> aws cloudformation deploy \
>   --template-file pipeline_template.yaml \
>   --stack-name your-pipeline-stack-name \
>   --parameter-overrides \
>     GitHubOwner=your-github-username \
>     GitHubRepo=your-repo-name \
>     GitHubBranch=your-branch-name \
>     GitHubOAuthToken=your-oauth-token \
>   --capabilities CAPABILITY_NAMED_IAM

Make sure to replace your-pipeline-stack-name, your-github-username, your-repo-name, your-branch-name, and your-oauth-token with the appropriate values.

After running the command, AWS CloudFormation will create a stack with the specified CodePipeline and its required resources. The pipeline will be configured to automatically trigger when changes are pushed to the specified branch of the code repository. The pipeline will use AWS CodeBuild to build the Lambda function code and then deploy the built Lambda function using AWS CloudFormation with the provided lambda_template.yaml.

### Useful Resources:
- [generating an auth token in GitHub](https://docker.awsworkshop.io/41_codepipeline/10_setup_secretsmanager_github.html#:~:text=generating%20a%20token%20for%20us%20to%20use%20in%20GitHub)