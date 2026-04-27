import logging
import uuid
import random
from typing import List, Dict, Any
from datetime import datetime

# Devopstrio AVD Cost Optimizer - Optimizer Engine
# Intelligent Decision Logic for Rightsizing and Idle Management

logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(name)s - %(levelname)s - %(message)s")
logger = logging.getLogger("Optimizer-Engine")

class Recommendation:
    def __init__(self, category: str, pool: str, savings: float, details: str):
        self.id = f"opt-{uuid.uuid4().hex[:8]}"
        self.category = category # Rightsizing, Deallocation, Storage
        self.pool = pool
        self.est_monthly_savings = savings
        self.details = details
        self.created_at = datetime.utcnow().isoformat()

class OptimizerEngine:
    """Evaluates telemetry to find high-impact cost reduction opportunities."""

    def __init__(self):
        self.active_recommendations = []

    def run_optimization_cycle(self, host_pool_telemetry: List[Dict[str, Any]]):
        """Analyzes a set of host pools for sizing and power-state inefficiencies."""
        logger.info(f"Optimization cycle started for {len(host_pool_telemetry)} pools.")
        new_recs = []

        for pool in host_pool_telemetry:
            # 1. Check for Rightsizing (Low Peak CPU)
            if pool.get("cpu_peak", 0) < 20:
                rec = Recommendation(
                    category="Rightsizing",
                    pool=pool["name"],
                    savings=round(pool["monthly_cost"] * 0.4, 2),
                    details=f"Hosts in {pool['name']} consistently peaking below 20% CPU. Recommend downsizing SKU."
                )
                new_recs.append(rec)

            # 2. Check for Deallocation Opportunities (Off-peak Idle)
            if pool.get("is_off_peak", False) and pool.get("active_sessions", 0) < 5:
                rec = Recommendation(
                    category="Deallocation",
                    pool=pool["name"],
                    savings=round(pool["monthly_cost"] * 0.25, 2),
                    details=f"Pool {pool['name']} is available but idle during off-peak hours. Schedule shutdown."
                )
                new_recs.append(rec)

        self.active_recommendations = new_recs
        logger.info(f"Cycle complete. {len(new_recs)} optimization opportunities identified.")
        return new_recs

    def get_savings_score(self) -> float:
        """Calculates a health score from 0-100 based on optimization coverage."""
        # Mock calculation: High score means few open recommendations
        return round(random.uniform(70.0, 98.0), 1)

# Instance for platform integration
optimizer = OptimizerEngine()

if __name__ == "__main__":
    # Internal validation test
    mock_telemetry = [
        {"name": "UK-SALES", "cpu_peak": 15, "monthly_cost": 4500, "active_sessions": 2},
        {"name": "US-ENG", "cpu_peak": 85, "monthly_cost": 12000, "is_off_peak": True, "active_sessions": 50}
    ]
    recs = optimizer.run_optimization_cycle(mock_telemetry)
    for r in recs:
        print(f"[{r.category}] {r.pool} -> Save ${r.est_monthly_savings}")
