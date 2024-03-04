function calculateTierDistribution(totalPeople, prizePool, tierPercentages) {
    // Validate input
    if (!totalPeople || !prizePool || !Array.isArray(tierPercentages) || tierPercentages.length !== 3) {
      throw new Error("Invalid input: Provide total people, prize pool, and an array of 3 tier percentages.");
    }
  
    // const totalPercentages = tierPercentages.reduce((sum, value) => sum + value, 0);
    // if (totalPercentages !== 100) {
    //   throw new Error("Tier percentages must sum to 100.");
    // }
  
    // Calculate tier ranges based on total people and percentages
    const tierRanges = tierPercentages.map((percentage, index) => {
      const lowerBound = index === 0 ? 0 : tierPercentages[index - 1];
      const upperBound = lowerBound + percentage;
      return {
        lowerBound,
        upperBound,
      };
    });
  
    // Calculate the number of people in each tier
    const tierSizes = tierRanges.map(tier => {
      const lowerBoundIndex = Math.floor((tier.lowerBound / 100) * totalPeople);
      const upperBoundIndex = Math.ceil((tier.upperBound / 100) * totalPeople) - 1; // Adjust for zero-based indexing
      return upperBoundIndex - lowerBoundIndex + 1;
    });
  
    // Calculate prize per tier and per person
    const prizesPerTier = tierSizes.map(size => prizePool * (size / totalPeople));
    const prizesPerPerson = prizesPerTier.map(tierPrize => tierPrize / tierPrize);
  
    return {
      tierRanges,
      tierSizes,
      prizesPerTier,
      prizesPerPerson,
    };
  }
  
  // Example usage
  const totalPeople = 17;
  const prizePool = 10000;
  const tierPercentages = [5, 14, 29]; // Tier 1: 5%, Tier 2: 14%, Tier 3: 29%
  
  const distributionResults = calculateTierDistribution(totalPeople, prizePool, tierPercentages);
  
  console.log(distributionResults); // Detailed results for each tier
  