# Devopstrio AVD Cost Optimizer
# Foundation Infrastructure as Code
# Target: Azure RM

terraform {
  required_version = ">= 1.5.0"
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "~> 3.90"
    }
  }
}

provider "azurerm" {
  features {}
}

# 1. Resource Group
resource "azurerm_resource_group" "finops_rg" {
  name     = "rg-avd-finops-prd"
  location = "westeurope"
  tags = {
    Environment = "Production"
    Platform    = "AVD-Cost-Optimizer"
    CostCenter  = "Corporate-IT"
  }
}

# 2. Managed PostgreSQL (The FinOps Ledger)
resource "azurerm_postgresql_flexible_server" "ledger_db" {
  name                   = "psql-avd-finops-ledger"
  resource_group_name    = azurerm_resource_group.finops_rg.name
  location               = azurerm_resource_group.finops_rg.location
  version                = "15"
  administrator_login    = "finopsadmin"
  administrator_password = "SecureFinOpsPassword123!" # Use KeyVault in real scenario

  storage_mb = 32768
  sku_name   = "GP_Standard_D2s_v3"
}

# 3. Redis Cache (Hot usage metrics)
resource "azurerm_redis_cache" "metrics_cache" {
  name                = "redis-avd-finops-metrics"
  location            = azurerm_resource_group.finops_rg.location
  resource_group_name = azurerm_resource_group.finops_rg.name
  capacity            = 1
  family              = "C"
  sku_name            = "Basic"
  enable_non_ssl_port = false
}

# 4. Storage for Chargeback Artifacts (Exports / Reports)
resource "azurerm_storage_account" "report_store" {
  name                     = "stfinopsreportsprd"
  resource_group_name      = azurerm_resource_group.finops_rg.name
  location                 = azurerm_resource_group.finops_rg.location
  account_tier             = "Standard"
  account_replication_type = "LRS"

  blob_properties {
    versioning_enabled = true
  }
}

# 5. Application Insights (Platform Ops Monitoring)
resource "azurerm_application_insights" "finops_app_insights" {
  name                = "ai-avd-finops-prd"
  location            = azurerm_resource_group.finops_rg.location
  resource_group_name = azurerm_resource_group.finops_rg.name
  application_type    = "web"
}

# Outputs
output "psql_endpoint" {
  value = azurerm_postgresql_flexible_server.ledger_db.fqdn
}

output "storage_endpoint" {
  value = azurerm_storage_account.report_store.primary_blob_endpoint
}
