import * as pulumi from "@pulumi/pulumi";
import * as resources from "@pulumi/azure-native/resources";
import * as web from "@pulumi/azure-native/web";

// Créer un groupe de ressources
const resourceGroup = new resources.ResourceGroup("rg-vue2048-prod", {
    location: "France Central",
    tags: {
        Class: "EI8IT213",
    },
});

// Créer une ressource Azure Static Web App
const staticWebApp = new web.StaticSite("stapp-vue2048-prod", {
    resourceGroupName: resourceGroup.name,
    location: "West Europe",
    sku: {
        name: "Free",
        tier : "Free"
    },
    repositoryUrl: "https://github.com/moharekik/al-mr-TP-GL", // Remplacer par l'URL du dépôt GitHub
    // branch: "main", // Branch à déployer
    appArtifactLocation: {
        type: "Other", // Source de déploiement
    },
    tags: {
        Class: "EI8IT213",
    },
});

// Exporter les informations de l'application web statique
export const staticWebAppUrl = staticWebApp.defaultHostname;
export const staticWebAppHostname = staticWebApp.defaultHostname;
export const staticWebAppDeployToken = pulumi.secret(web.listStaticSiteSecretsOutput({name : staticWebApp}));