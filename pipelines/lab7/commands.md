# Get Deployment token

- https://azure.github.io/static-web-apps-cli/docs/cli/swa-deploy#deployment-token
- Azure CLI command : `az staticwebapp secrets list --name stapp-vue2048-prod --query "properties.apiKey"`
- SWA CLI command : `swa deploy -R rg-vue2048-prod -n  stapp-vue2048-prod --print-token`

# Deploy using deployment token

- command : swa deploy ./dist --app-name stapp-vue2048-qa -d $DeploymentToken