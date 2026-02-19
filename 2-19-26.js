const avalancheRisk = (snowDepth, slope) => (snowDepth === "Shallow" || slope === "Gentle") ? "Safe" : "Risky"
