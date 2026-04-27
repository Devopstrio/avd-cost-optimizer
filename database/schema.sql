-- Devopstrio AVD Cost Optimizer Platform
-- Core FinOps & Optimization Database Schema
-- Target: PostgreSQL 15+

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 1. Identity & Tenancy
CREATE TABLE IF NOT EXISTS tenants (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL,
    azure_tenant_id VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id),
    email VARCHAR(255) UNIQUE NOT NULL,
    role VARCHAR(50) DEFAULT 'FinOpsManager', -- Admin, FinOpsManager, Viewer
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 2. Infrastructure & Cost Monitoring
CREATE TABLE IF NOT EXISTS host_pools (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id),
    pool_name VARCHAR(255) NOT NULL,
    subscription_id VARCHAR(100) NOT NULL,
    resource_group VARCHAR(255) NOT NULL,
    region VARCHAR(100) NOT NULL,
    vm_size_standard VARCHAR(100) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS cost_records (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    pool_id UUID REFERENCES host_pools(id) ON DELETE CASCADE,
    date DATE NOT NULL,
    billing_currency VARCHAR(10) DEFAULT 'USD',
    total_cost NUMERIC(15, 4) NOT NULL,
    on_demand_cost NUMERIC(15, 4),
    reserved_cost NUMERIC(15, 4),
    carbon_equivalent_kg NUMERIC(15, 4)
);

CREATE TABLE IF NOT EXISTS usage_metrics (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    pool_id UUID REFERENCES host_pools(id) ON DELETE CASCADE,
    timestamp TIMESTAMP WITH TIME ZONE NOT NULL,
    active_sessions INT DEFAULT 0,
    cpu_average_percent FLOAT,
    memory_average_percent FLOAT,
    provisioned_host_count INT NOT NULL
);

-- 3. Optimization & Recommendations
CREATE TABLE IF NOT EXISTS recommendations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    pool_id UUID REFERENCES host_pools(id) ON DELETE CASCADE,
    category VARCHAR(50) NOT NULL, -- Rightsizing, Shutdown, RI_Purchase
    current_state TEXT,
    target_state TEXT,
    est_monthly_savings NUMERIC(15, 4) NOT NULL,
    status VARCHAR(50) DEFAULT 'Pending', -- Pending, Applied, Dismissed
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS forecasts (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    pool_id UUID REFERENCES host_pools(id),
    month DATE NOT NULL,
    predicted_cost NUMERIC(15, 4) NOT NULL,
    lower_bound NUMERIC(15, 4),
    upper_bound NUMERIC(15, 4),
    model_version VARCHAR(50)
);

-- 4. Governance & Policies
CREATE TABLE IF NOT EXISTS cost_policies (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    rule_type VARCHAR(100) NOT NULL, -- DailyLimit, IdleShutdown, AllowedSKUs
    rule_config JSONB NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- 5. Reporting & Auditing
CREATE TABLE IF NOT EXISTS reports (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id),
    report_type VARCHAR(100) NOT NULL, -- Chargeback, Sustainability, Savings
    file_path TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    tenant_id UUID REFERENCES tenants(id),
    user_id UUID REFERENCES users(id),
    action VARCHAR(255) NOT NULL,
    resource_id VARCHAR(255),
    details JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

-- Indexes for performance
CREATE INDEX idx_cost_date ON cost_records(date);
CREATE INDEX idx_usage_timestamp ON usage_metrics(timestamp);
CREATE INDEX idx_recommendations_status ON recommendations(status);
CREATE INDEX idx_forecast_month ON forecasts(month);
