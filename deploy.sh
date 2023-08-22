#!/bin/bash

npm run build

az storage blob upload-batch --destination '$web' --source ./build --account-name 'nstechconecta' --account-key $accountKey --overwrite