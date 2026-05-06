<div align="center">

<img src="https://raw.githubusercontent.com/Devopstrio/.github/main/assets/Browser_logo.png" height="90" alt="Devopstrio Logo" />

<h1>Azure Virtual Desktop (AVD) Cost Optimizer</h1>

<p><strong>Enterprise FinOps Control Plane & Intelligent Resource Orchestration</strong></p>

[![FinOps](https://img.shields.io/badge/Strategy-FinOps_Foundation-522c72?style=for-the-badge&labelColor=000000)](https://finops.org)
[![Platform](https://img.shields.io/badge/Compute-Azure_Virtual_Desktop-0078d4?style=for-the-badge&logo=microsoftazure&labelColor=000000)](https://devopstrio.co.uk/)
[![Sustainability](https://img.shields.io/badge/Metric-Carbon_Aware_Scaling-emerald?style=for-the-badge&labelColor=000000)](/apps/policy-engine)
[![ROI](https://img.shields.io/badge/Status-ROI_Focused-success?style=for-the-badge&labelColor=000000)](https://devopstrio.co.uk/)

</div>

---

## 🏛️ Executive Summary

The **AVD Cost Optimizer** is a flagship enterprise platform designed to maximize the return on investment for Azure Virtual Desktop environments. In large-scale VDI estates, compute waste and inefficient storage tiering can account for up to 60% of unnecessary cloud spend. 

This platform provides an intelligent orchestration layer that combines **real-time usage analytics**, **predictive demand forecasting**, and **automated rightsizing** to ensure that every cent spent on AVD is optimized. By bridging the gap between infrastructure operations and financial accountability, it empowers organizations to run high-performance digital workspaces while maintaining strict budget governance.

### Strategic Business Outcomes
- **Massive Cost Reduction**: Achieve up to 45% annual savings on AVD compute through intelligent deallocation and reserved instance alignment.
- **Improved FinOps Visibility**: Provide granular chargeback and showback reports to department heads, driving cultural accountability for resource consumption.
- **Sustainable IT Operations**: Reduce data center carbon footprint by aligning session host availability with actual work patterns.
- **Predictive Budgeting**: Eliminate "cloud bill shock" with AI-driven forecasting that detects seasonal growth trends before they impact the bottom line.

---

## 🏗️ Technical Architecture Details

### 1. High-Level FinOps Architecture
```mermaid
flowchart TD
    Monitor["Azure Monitor / Cost API"] --> Ingest["Analytics Engine"]
    Ingest["Analytics Engine"] --> DB[("Optimized Data Store")]
    DB[("Optimized Data Store")] --> Optimizer["Optimization Engine"]
    Optimizer["Optimization Engine"] --> Action["Autoscale / Rightsizer"]
    Action["Autoscale / Rightsizer"] --> AVD["AVD Host Pools"]
    
    subgraph ControlPlane["Control Plane"]
        Portal["Next.js FinOps UI"]
        API["FastAPI Gateway"]
        Forecast["AI Forecast Engine"]
    end
    
    API --> DB
    Forecast --> DB
    Portal --> API
```

### 2. Cost Ingestion & Normalization Workflow
```mermaid
sequenceDiagram
    participant Azure as Azure Consumption API
    participant Engine as Analytics Engine
    participant Cache as Redis Cache
    participant DB as Platform DB

    Azure->>Engine: Push Daily Usage & Rate Data
    Engine->>Engine: Normalize Costs (EA/PAYG/RI)
    Engine->>Cache: Update Hot Metrics
    Engine->>DB: Persist Historical Record
    Engine-->>Azure: Ack Reception
```

### 3. Rightsizing Lifecycle
```mermaid
flowchart TD
    Analyze["Analyze Host Performance"] --> Profile["Match Workload Density"]
    Profile["Match Workload Density"] -->|Undersized| Upgrade["Request Upgrade Path"]
    Profile["Match Workload Density"] -->|Oversized| Downgrade["Request Downgrade Path"]
    Upgrade["Request Upgrade Path"] --> User["Admin Approval Gate"]
    Downgrade["Request Downgrade Path"] --> User
    User["Admin Approval Gate"] -->|Approve| Execute["Azure VM Resize"]
```

### 4. Host Pool Autoscale Flow
```mermaid
flowchart LR
    Scan["Scan Active Sessions"] --> Calc["Calculate Target Capacity"]
    Calc["Calculate Target Capacity"] -->|Over Provisioned| Stop["Stop VM & Save Cost"]
    Calc["Calculate Target Capacity"] -->|Under Provisioned| Start["Start VM for UX"]
    Stop["Stop VM & Save Cost"] --> Log["Record Savings Metric"]
```

### 5. Forecast Model Flow
```mermaid
flowchart TD
    History["3-Month Cost History"] --> Model["Prophet / LSTM Model"]
    Model["Prophet / LSTM Model"] --> Trend["Detect Seasonal Peak"]
    Trend["Detect Seasonal Peak"] --> Projection["Generate 12-Month Forecast"]
    Projection["Generate 12-Month Forecast"] --> Alert["Budget Variance Alert"]
```

### 6. Security Trust Boundary
```mermaid
flowchart TD
    Portal["Admin Portal"] --> Auth["Entra ID / MFA"]
    Auth["Entra ID / MFA"] --> APIGateway["API Gateway"]
    APIGateway["API Gateway"] --> KeyVault["Fetch Service Principal"]
    KeyVault["Fetch Service Principal"] --> AzureAPI["Execute Cost API Call"]
```

### 7. Global AVD Topology
```mermaid
flowchart LR
    Hub["Global FinOps Hub"] --> UK["UK South Spoke"]
    Hub["Global FinOps Hub"] --> US["US East Spoke"]
    Hub["Global FinOps Hub"] --> AU["Australia East Spoke"]
    UK["UK South Spoke"] --> PoolUK["Regional Cost Insight"]
```

### 8. API Request Lifecycle
```mermaid
flowchart LR
    Request["POST /optimizer/run"] --> Auth["Verify RBAC"]
    Auth["Verify RBAC"] --> Engine["Optimizer Engine"]
    Engine["Optimizer Engine"] --> Result["Return Savings Score"]
    Result["Return Savings Score"] --> Audit["Log to Audit Trail"]
```

### 9. Multi-Tenant Resource Model
```mermaid
flowchart TD
    Org["Global Org"]
    Org["Global Org"] --> BU1["Finance BU"]
    Org["Global Org"] --> BU2["Engineering BU"]
    BU1["Finance BU"] --> HP1["Host Pool A"]
    BU2["Engineering BU"] --> HP2["Host Pool B"]
```

### 10. Monitoring & Telemetry Flow
```mermaid
flowchart LR
    Metrics["Disk/CPU/Mem"] --> OTEL["OpenTelemetry"]
    OTEL["OpenTelemetry"] --> Prometheus["Storage DB"]
    Prometheus["Storage DB"] --> Grafana["FinOps Dashboard"]
```

### 11. Disaster Recovery Topology
```mermaid
flowchart TD
    Primary["UK South Region"] --> Sync["State Replication"]
    Sync["State Replication"] --> Secondary["US East 2 Region"]
    Primary["UK South Region"] -.->|Outage| Trigger["Failover Logic"]
```

### 12. Chargeback Workflow
```mermaid
flowchart TD
    Cost["Aggregated Cost"] --> Tag["Resource Tag Filter"]
    Tag["Resource Tag Filter"] --> Dept["Associate with Dept"]
    Dept["Associate with Dept"] --> Invoice["Generate Internal PDF Bill"]
```

### 13. Sustainability Metrics Flow
```mermaid
flowchart LR
    Energy["VM Energy Factor"] --> Carbon["Grid Carbon Intensity"]
    Carbon["Grid Carbon Intensity"] --> Dashboard["Sustainability Score"]
    Dashboard["Sustainability Score"] --> Advice["Carbon-Aware Scaling Advice"]
```

### 14. CI/CD Operations Pipeline
```mermaid
flowchart LR
    Code["Optimizer Code"] --> Sec["Snyk/SonarCloud Scan"]
    Sec["Snyk/SonarCloud Scan"] --> Build["Docker Build"]
    Build["Docker Build"] --> Deploy["AKS Rollout"]
```

### 15. Executive Governance Workflow
```mermaid
flowchart TD
    Strategy["Set Savings Target"] --> Policy["Configure Policy Engine"]
    Policy["Configure Policy Engine"] --> Enforcement["Automated Remediation"]
    Enforcement["Automated Remediation"] --> Review["Monthly Board Review"]
```

### 16. Idle Shutdown Lifecycle
```mermaid
flowchart TD
    Timer["Idle Timer Exceeded"] --> Notify["Notify User Session"]
    Notify["Notify User Session"] --> Logoff["Force Logoff"]
    Logoff["Force Logoff"] --> Shutdown["Deallocate VM"]
```

### 17. Identity Federation Architecture
```mermaid
flowchart LR
    Client["Browser"] --> OIDC["OIDC Flow"]
    OIDC["OIDC Flow"] --> Platform["Optimizer Platform"]
    Platform["Optimizer Platform"] --> Graph["Microsoft Graph Permissions"]
```

### 18. Budget Alert Workflow
```mermaid
flowchart TD
    Threshold["80% Threshold Hit"] --> Event["Webhook Trigger"]
    Event["Webhook Trigger"] --> Slack["Slack Notification"]
    Event["Webhook Trigger"] --> Email["Email to Owner"]
```

### 19. Global Region Topology
```mermaid
flowchart TD
    Global["Global Control Plane"]
    Global["Global Control Plane"] --> EMEA["EMEA Clusters"]
    Global["Global Control Plane"] --> AMER["AMER Clusters"]
    Global["Global Control Plane"] --> APAC["APAC Clusters"]
```

### 20. Savings Realization Model
```mermaid
flowchart LR
    Avoided["Avoided Cost"] --> Predicted["Predicted Spend"]
    Predicted["Predicted Spend"] --> Actual["Actual Lower Spend"]
    Actual["Actual Lower Spend"] --> Report["Board Savings Report"]
```

---

## 🛠️ Global Platform Components

### 1. Analytics Engine
The core intelligence layer that continuously scrapes Azure Consumption APIs to build a multi-dimensional view of VDI spend across regions and tenants.

### 2. Optimizer Engine
The decision-making heart of the platform. It applies rightsizing rules, validates SKU availability, and ranks session hosts based on their "Cost Efficiency Score."

### 3. Forecast Engine
Leverages machine learning models to project future cloud spend based on historical growth and planned headcount increases.

---

## 🚀 Environment Deployment

### Terraform Orchestration
```bash
cd terraform/environments/prd
terraform init
terraform apply -auto-approve
```

---
<sub>&copy; 2026 Devopstrio &mdash; Engineering Financial Accountability for the Digital Workspace.</sub>
