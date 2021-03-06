/* Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: Apache-2.0
ABOUT THIS NODE.JS EXAMPLE: This example works with AWS SDK for JavaScript version 3 (v3),
which is available at https://github.com/aws/aws-sdk-js-v3. This example is in the 'AWS SDK for JavaScript v3 Developer Guide' at
https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/s3-example-access-permissions.html.
Purpose:
s3_getbucketacl.ts demonstrates how to retrieve the access control list of an Amazon S3 bucket.
Inputs (replace in code):
- REGION
- BUCKET_NAME
Running the code:
ts-node S3.ts
Outputs:
Lists the buckets in the associated AWS account, then creates a bucket, then deletes it
*/
//snippet-start:[s3.JavaScript.perms.getBucketAclV3]
// Import required AWS SDK clients and commands for Node.js
const { S3Client, GetBucketAclCommand } = require("@aws-sdk/client-s3/");

// Set the AWS region
const REGION = "region"; //e.g. "us-east-1"

// Create the parameters for calling
const bucketParams = { Bucket: "BUCKET_NAME" };

// Create S3 service object
const s3 = new S3Client({ region: REGION });

const run = async () => {
  try {
    const data = await s3.send(new GetBucketAclCommand(bucketParams));
    console.log("Success", data.Grants);
  } catch (err) {
    console.log("Error", err);
  }
};
run();
// snippet-end:[s3.JavaScript.perms.getBucketAclV3]

