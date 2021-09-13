#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { AwsStack } from "../lib/aws-stack";

const app = new cdk.App();
new AwsStack(app, "AwsStack", {
  env: {
    account: "036720910160",
    region: "us-east-1",
  },
});
