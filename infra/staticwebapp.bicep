// Bicep module to create an Azure Static Web App
// Save as staticwebapp.bicep

param name string
param location string = resourceGroup().location
param sku string = 'Free'
param repositoryUrl string
param branch string = 'main'

resource staticWebApp 'Microsoft.Web/staticSites@2022-09-01' = {
  name: name
  location: location
  sku: {
    name: sku
  }
  properties: {
    repositoryUrl: repositoryUrl
    branch: branch
    buildProperties: {
      appLocation: '/'
      outputLocation: 'build'
    }
  }
}

output staticWebAppName string = staticWebApp.name
output staticWebAppHostname string = staticWebApp.properties.defaultHostname
