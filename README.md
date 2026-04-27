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
graph TD
    Monitor[Azure Monitor / Cost API] --> Ingest[Analytics Engine]
    Ingest --> DB[(Optimized Data Store)]
    DB --> Optimizer[Optimization Engine]
    Optimizer --> Action[Autoscale / Rightsizer]
    Action --> AVD[AVD Host Pools]
    
    subgraph "Control Plane"
        Portal[Next.js FinOps UI]
        API[FastAPI Gateway]
        Forecast[AI Forecast Engine]
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
graph TD
    Analyze[Analyze Host Performance] --> Profile[Match Workload Density]
    Profile -->|Undersized| Upgrade[Request Upgrade Path]
    Profile -->|Oversized| Downgrade[Request Downgrade Path]
    Upgrade --> User[Admin Approval Gate]
    Downgrade --> User
    User -->|Approve| Execute[Azure VM Resize]
```

### 4. Host Pool Autoscale Flow
```mermaid
graph LR
    Scan[Scan Active Sessions] --> Calc[Calculate Target Capacity]
    Calc -->|Over Provisioned| Stop[Stop VM & Save Cost]
    Calc -->|Under Provisioned| Start[Start VM for UX]
    Stop --> Log[Record Savings Metric]
```

### 5. Forecast Model Flow
```mermaid
graph TD
    History[3-Month Cost History] --> Model[Prophet / LSTM Model]
    Model --> Trend[Detect Seasonal Peak]
    Trend --> Projection[Generate 12-Month Forecast]
    Projection --> Alert[Budget Variance Alert]
```

### 6. Security Trust Boundary
```mermaid
graph TD
    Portal[Admin Portal] --> Auth[Entra ID / MFA]
    Auth --> APIGateway[API Gateway]
    APIGateway --> KeyVault[Fetch Service Principal]
    KeyVault --> AzureAPI[Execute Cost API Call]
```

### 7. Global AVD Topology
```mermaid
graph LR
    Hub[Global FinOps Hub] --> UK[UK South Spoke]
    Hub --> US[US East Spoke]
    Hub --> AU[Australia East Spoke]
    UK --> PoolUK[Regional Cost Insight]
```

### 8. API Request Lifecycle
```mermaid
graph LR
    Request[POST /optimizer/run] --> Auth[Verify RBAC]
    Auth --> Engine[Optimizer Engine]
    Engine --> Result[Return Savings Score]
    Result --> Audit[Log to Audit Trail]
```

### 9. Multi-Tenant Resource Model
```mermaid
graph TD
    Org[Global Org]
    Org --> BU1[Finance BU]
    Org --> BU2[Engineering BU]
    BU1 --> HP1[Host Pool A]
    BU2 --> HP2[Host Pool B]
```

### 10. Monitoring & Telemetry Flow
```mermaid
graph LR
    Metrics[Disk/CPU/Mem] --> OTEL[OpenTelemetry]
    OTEL --> Prometheus[Storage DB]
    Prometheus --> Grafana[FinOps Dashboard]
```

### 11. Disaster Recovery Topology
```mermaid
graph TD
    Primary[UK South Region] --> Sync[State Replication]
    Sync --> Secondary[US East 2 Region]
    Primary -.->|Outage| Trigger[Failover Logic]
```

### 12. Chargeback Workflow
```mermaid
graph TD
    Cost[Aggregated Cost] --> Tag[Resource Tag Filter]
    Tag --> Dept[Associate with Dept]
    Dept --> Invoice[Generate Internal PDF Bill]
```

### 13. Sustainability Metrics Flow
```mermaid
graph LR
    Energy[VM Energy Factor] --> Carbon[Grid Carbon Intensity]
    Carbon --> Dashboard[Sustainability Score]
    Dashboard --> Advice[Carbon-Aware Scaling Advice]
```

### 14. CI/CD Operations Pipeline
```mermaid
graph LR
    Code[Optimizer Code] --> Sec[Snyk/SonarCloud Scan]
    Sec --> Build[Docker Build]
    Build --> Deploy[AKS Rollout]
```

### 15. Executive Governance Workflow
```mermaid
graph TD
    Strategy[Set Savings Target] --> Policy[Configure Policy Engine]
    Policy --> Enforcement[Automated Remediation]
    Enforcement --> Review[Monthly Board Review]
```

### 16. Idle Shutdown Lifecycle
```mermaid
graph TD
    Timer[Idle Timer Exceeded] --> Notify[Notify User Session]
    Notify --> Logoff[Force Logoff]
    Logoff --> Shutdown[Deallocate VM]
```

### 17. Identity Federation Architecture
```mermaid
graph LR
    Client[Browser] --> OIDC[OIDC Flow]
    OIDC --> Platform[Optimizer Platform]
    Platform --> Graph[Microsoft Graph Permissions]
```

### 18. Budget Alert Workflow
```mermaid
graph TD
    Threshold[80% Threshold Hit] --> Event[Webhook Trigger]
    Event --> Slack[Slack Notification]
    Event --> Email[Email to Owner]
```

### 19. Global Region Topology
```mermaid
graph TD
    Global[Global Control Plane]
    Global --> EMEA[EMEA Clusters]
    Global --> AMER[AMER Clusters]
    Global --> APAC[APAC Clusters]
```

### 20. Savings Realization Model
```mermaid
graph LR
    Avoided[Avoided Cost] --> Predicted[Predicted Spend]
    Predicted --> Actual[Actual Lower Spend]
    Actual --> Report[Board Savings Report]
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
