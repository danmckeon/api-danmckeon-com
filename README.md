# api.danmckeon.com

## Overview

This code base is designed to handle REST-style APIs and cron jobs for personal projects.

## Getting started

### Configure AWS

1.  [Install aws-cli.](http://docs.aws.amazon.com/cli/latest/userguide/installing.html)
2.  Sign in to the [AWS management interface](https://givinggroup.signin.aws.amazon.com/console)
3.  Services->IAM->Users->(user)->Security Credentials->Create Access Key
4.  make a note of the Access Key ID and Secret Access Key shown
5.  back in the command line, type `aws configure`
6.  enter the ID and secret from step 4, and region as `us-west-2`
7.  test by typing `aws s3 ls`, and verifying there are no errors.

### Requirements

#### Serverless

[Serverless](https://serverless.com/) is used to manage service deployment to AWS.

```
npm install -g serverless
```

#### Node Version 12

Validate your current version with:

```
node -v
```

#### Bash version 4+

Validate your current version with:

```
bash --version
```

#### jq

Validate the `jq` binary with:

```
which jq
```

## Commonly used commands

#### Install packages

```
npm install
```

#### Run the server locally offline

```
npm start
```

This will launch the server on http://localhost:3000

#### Deploy staging to AWS

```
npm run deploy
```

## Architecture

The servers hosting the code in this repository are handled by AWS Lambda, using a "serverless"
architecture. See [serverless](https://serverless.com/) for more info on setup and deployment.

## Code rules

1. Use [Prettier](https://github.com/prettier/prettier) for formatting.
2. Attempt to pass lint. If Prettier and TSLint disagree, defer to Prettier.

## Contributing

1.  Create a new branch

```
git checkout -B <new branch name>
```

2.  Implement changes
3.  Clean up any lint errors/warnings.

```
npm run lint
```

4.  Make sure all tests pass.

```
yarn test
```

5.  Commit/push changes.

```
git commit -am "<checkin message>"
git push
```

6.  Submit a PR!

## Tasks

Tasks live in the `tasks` directory and are typically used to test APIs or to execute a one-time operation such as a migration. In order to run tasks with the desired environment variables (required for virtually any task of substance), execute the `run-with-env.sh` script followed by the `ts` filename. For instance, to run the `kasa-playground.ts` script, you would execute:

```
tasks/run-with-env.sh tasks/kasa-playground.ts
```
