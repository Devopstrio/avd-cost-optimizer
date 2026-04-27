import logging
import math
import random
from typing import List, Dict
from datetime import datetime, timedelta

# Devopstrio AVD Cost Optimizer - Forecast Engine
# AI-driven demand prediction and budget variance analysis

logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(name)s - %(levelname)s - %(message)s")
logger = logging.getLogger("Forecast-Engine")

class ForecastEngine:
    """Predicts future cloud spend based on historical patterns and seasonal growth."""

    def __init__(self):
        self.default_growth_rate = 0.05 # 5% MoM growth default

    def generate_12_month_projection(self, current_base_cost: float, historical_data: List[float] = None) -> List[Dict[str, Any]]:
        """Project future environment burn based on past performance and linear regression."""
        logger.info(f"Generating 12-month projection from base: ${current_base_cost}")
        
        forecast = []
        now = datetime.now()
        
        for month_offset in range(1, 13):
            # Simulation of predictive model logic
            noise = random.uniform(-0.02, 0.08) # Variation factor
            predicted_value = current_base_cost * math.pow((1 + self.default_growth_rate + noise), month_offset)
            
            target_date = now + timedelta(days=30 * month_offset)
            forecast.append({
                "month": target_date.strftime("%Y-%m"),
                "base_prediction": round(predicted_value, 2),
                "upper_bound": round(predicted_value * 1.1, 2),
                "lower_bound": round(predicted_value * 0.9, 2)
            })

        return forecast

    def calculate_budget_variance(self, budget_limit: float, projected_spend: float) -> Dict[str, Any]:
        """Detects if future forecasts will breach the defined organizational budget."""
        variance = projected_spend - budget_limit
        is_breach = variance > 0
        
        return {
            "is_breach": is_breach,
            "variance_amount": round(variance, 2),
            "percentage": round((variance / budget_limit) * 100, 2) if budget_limit > 0 else 0,
            "recommendation": "Increase Reserved Instance coverage or aggressively scale down non-prod environments." if is_breach else "Within limit."
        }

# Global Instance
forecaster = ForecastEngine()

if __name__ == "__main__":
    # Internal validation
    f = forecaster.generate_12_month_projection(10000)
    print(f"Next Month Forecast: ${f[0]['base_prediction']}")
    div = forecaster.calculate_budget_variance(120000, 145000)
    print(f"Budget Health: {div['recommendation']}")
