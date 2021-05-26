// Function to return the median value from some array.
function median(values) {
  // Input: 1- array of numbers(values)
  // Output: number
  // Purpose: return the median value from a list of numbers

  values.sort(function(a, b) {
    return a - b;
  });

  if (values.length === 0) return 0;

  let half = Math.floor(values.length / 2);

  if (values.length % 2) return values[half];
  else return (values[half - 1] + values[half]) / 2.0;
}

// Function cleanData.
function cleanData() {
  // Input: 1- list of objects (listDemands) - Object: {demandP, demandFP, usageP, usageFP, type, rates}.
  // Output: list of objects (newList) - Object: {demandP, demandFP, usageP, usageFP, type, rates}.
  // Purpose: Replace items with values that are 50% higher or lower than the median for an item with the median values.

  const [listDemands] = arguments;
  const newList = [];

  const listDemandP = [];
  const listDemandFP = [];
  listDemands.forEach(item => {
    listDemandP.push(item.demandP);
    listDemandFP.push(item.demandFP);
  });
  const medianDemandP = median(listDemandP);
  const medianDemandFP = median(listDemandFP);

  listDemands.forEach(item => {
    const newDemand = {
      demandP: medianDemandP,
      demandFP: medianDemandFP,
      usageP: item.usageP,
      usageFP: item.usageFP,
      type: item.type,
      rates: item.rates
    };
    if (
      item.demandP > medianDemandP * 0.5 &&
      item.demandP < medianDemandP * 1.5 &&
      item.demandFP > medianDemandFP * 0.5 &&
      item.demandFP < medianDemandFP * 1.5
    ) {
      newDemand.demandP = item.demandP;
      newDemand.demandFP = item.demandFP;
      newDemand.usageP = item.usageP;
      newDemand.usageFP = item.usageFP;
      newDemand.type = item.type;
      newDemand.rates = item.rates;
    }
    newList.push(newDemand);
  });

  return newList;
}

// Function demandProfile.
function demandProfile() {
  // Input: 1- list of objects (initialListDemands) - Object: {demandP, demandFP, type}. Restriction: All types must be equal 2.
  // Output: Object (demandProfile): {percentageP, percentageFP}.
  // Purpose: Calculate what's the percentage of the demandP and demandFP compared to the max of (demandP and demandFP).

  const [initialListDemands] = arguments;
  let demandProfileList = { percentageP: [], percentageFP: [] };
  const listDemands = cleanData(initialListDemands);

  listDemands.forEach(item => {
    const maxDemand = Math.max(item.demandP, item.demandFP);
    demandProfileList.percentageP.push(item.demandP / maxDemand);
    demandProfileList.percentageFP.push(item.demandFP / maxDemand);
  });

  const demandProfile = {
    percentageP:
      demandProfileList.percentageP.reduce(
        (total, current) => total + current,
        0
      ) / demandProfileList.percentageP.length,
    percentageFP:
      demandProfileList.percentageFP.reduce(
        (total, current) => total + current,
        0
      ) / demandProfileList.percentageFP.length
  };

  if (
    demandProfile.percentageP < 0.5 ||
    demandProfile.percentageP > 0.95 ||
    isNaN(demandProfile.percentageP)
  )
    demandProfile.percentageP = 0.85;
  if (
    demandProfile.percentageFP < 0.7 ||
    demandProfile.percentageFP > 1.3 ||
    isNaN(demandProfile.percentageFP)
  )
    demandProfile.percentageFP = 1;

  return demandProfile;
}

// Function prepareDemands.
function prepareDemands() {
  // Input: 1- list of objects (listDemands) - Object: {demandP, demandFP, usageP, usageFP, type, rates}.
  //        2- object (demandProfile): {percetageP, percetageFP}.
  // Output: list of objects (newList) - Object: {demandP, demandFP, usageP, usageFP, type, rates}
  // Purpose: If type is 01, fill all the demands using the demand profile (multiply by demand).
  //          After, clean all the data with the function above.

  const [listDemands, demandProfile] = arguments;
  const { percentageP, percentageFP } = demandProfile;

  const listFullDemands = [];
  listDemands.forEach(item => {
    if (item.type === 1) {
      const demand = item.demandFP ? item.demandFP : item.demandP;
      listFullDemands.push({
        demandP: demand * percentageP,
        demandFP: demand * percentageFP,
        usageP: item.usageP,
        usageFP: item.usageFP,
        type: item.type,
        rates: item.rates
      });
    } else if (item.type === 0 || item.type === 2) {
      listFullDemands.push(item);
    }
  });

  const newList = cleanData(listFullDemands);

  return newList;
}

// Function costBlue
function costBlue() {
  // Input: 1- list of objects (listItems) - Object: {demandP, demandFP, usageP, usageFP, type, rates}.
  //          rates(inside listItems): {rateUsageP, rateUsageFP, rateDemandP, rateDemandFP}.
  //        2- list of default rates (defaultRates) - Object: {rateUsageP, rateUsageFP, rateDemandP, rateDemandFP}
  // Output: object (result) - Object: {value, df, dp}
  // Purpose: Return an object with the best demandFP and demandP to contract (with the cost).

  const [listItems, defaultRates] = arguments;

  let minValue = 0;
  const result = { dp: 0, df: 0, value: 0 };

  const listDemandP = [];
  const listDemandFP = [];
  listItems.forEach(item => {
    listDemandP.push(item.demandP);
    listDemandFP.push(item.demandFP);
  });

  const minDemandP = Math.floor(Math.min(...listDemandP));
  const minDemandFP = Math.floor(Math.min(...listDemandFP));
  const maxDemandP = Math.floor(Math.max(...listDemandP));
  const maxDemandFP = Math.floor(Math.max(...listDemandFP));

  for (let dp = minDemandP; dp <= maxDemandP; dp = dp + 1) {
    for (let df = minDemandFP; df <= maxDemandFP; df = df + 1) {
      let value = 0;
      listItems.forEach(e => {
        if (!e.rates) e.rates = defaultRates;
        let { rateUsageP, rateUsageFP, rateDemandP, rateDemandFP } = e.rates;

        if (!rateUsageP || !rateUsageFP || !rateDemandP || !rateDemandFP) {
          rateUsageP = defaultRates.rateUsageP;
          rateUsageFP = defaultRates.rateUsageFP;
          rateDemandP = defaultRates.rateDemandP;
          rateDemandFP = defaultRates.rateDemandFP;
        }

        if (e.demandP <= dp) value += dp * rateDemandP;
        else if (e.demandP <= dp * 1.05) value += e.demandP * rateDemandP;
        else {
          value += e.demandP * rateDemandP;
          value += (e.demandP - dp) * 2 * rateDemandP;
        }

        if (e.demandFP <= df) value += df * rateDemandFP;
        else if (e.demandFP <= df * 1.05) value += e.demandFP * rateDemandFP;
        else {
          value += e.demandFP * rateDemandFP;
          value += (e.demandFP - df) * 2 * rateDemandFP;
        }

        value += e.usageP * rateUsageP;
        value += e.usageFP * rateUsageFP;
      });

      if (minValue === 0 || value < minValue) {
        minValue = value;
        result.value = minValue;
        result.df = df;
        result.dp = dp;
      }
    }
  }

  return result;
}

// Function costGreen.
function costGreen() {
  // Input: 1- list of objects (listItems) - Object: {demandP, demandFP, usageP, usageFP, type, rates}.
  //          rates(inside listItems): {rateUsageP, rateUsageFP, rateDemandFP}.
  //        2- list of default rates (defaultRates) - Object: {rateUsageP, rateUsageFP, rateDemandFP}
  // Output: object (result) - Object: {value, df, dp}
  // Purpose: Return an object with the best demandFP to contract (with the cost).

  const [listItems, defaultRates] = arguments;

  const result = { df: 0, value: 0 };

  const listDemandFP = [];
  listItems.forEach(item => {
    listDemandFP.push(Math.max(item.demandFP, item.demandP));
  });
  const minDemandFP = Math.floor(Math.min(...listDemandFP));
  const maxDemandFP = Math.floor(Math.max(...listDemandFP));

  for (let df = minDemandFP; df <= maxDemandFP; df = df + 1) {
    let value = 0;
    listDemandFP.forEach((e, i) => {
      if (!listItems[i].rates) listItems[i].rates = defaultRates;
      let { rateUsageP, rateUsageFP, rateDemandFP } = listItems[i].rates;
      if (!rateUsageP || !rateUsageFP || !rateDemandFP) {
        rateUsageP = defaultRates.rateUsageP;
        rateUsageFP = defaultRates.rateUsageFP;
        rateDemandFP = defaultRates.rateDemandFP;
      }

      if (e <= df) value += df * rateDemandFP;
      else if (e <= df * 1.05) value += e * rateDemandFP;
      else {
        value += e * rateDemandFP;
        value += (e - df) * 2 * rateDemandFP;
      }

      value += listItems[i].usageP * rateUsageP;
      value += listItems[i].usageFP * rateUsageFP;
    });

    if (result.df === 0 || value < result.value) {
      result.value = value;
      result.df = df;
    }
  }

  return result;
}

function cost(listItems, rates_blue, rates_green, demF, demP) {
  let value = 0;
  const isBlue = !isNaN(demP) && demP > 0;
  const defaultRates = isBlue ? rates_blue : rates_green;

  listItems.forEach(e => {
    if (!e.rates) e.rates = defaultRates;
    let { rateUsageP, rateUsageFP, rateDemandP, rateDemandFP } = e.rates;

    if (!rateUsageP || !rateUsageFP || !rateDemandP || !rateDemandFP) {
      rateUsageP = defaultRates.rateUsageP;
      rateUsageFP = defaultRates.rateUsageFP;
      rateDemandP = defaultRates.rateDemandP;
      rateDemandFP = defaultRates.rateDemandFP;
    }

    if (isBlue) {
      if (e.demandP <= demP) value += demP * rateDemandP;
      else if (e.demandP <= demP * 1.05) value += e.demandP * rateDemandP;
      else {
        value += e.demandP * rateDemandP;
        value += (e.demandP - demP) * 2 * rateDemandP;
      }
    }

    if (e.demandFP <= demF) value += demF * rateDemandFP;
    else if (e.demandFP <= demF * 1.05) value += e.demandFP * rateDemandFP;
    else {
      value += e.demandFP * rateDemandFP;
      value += (e.demandFP - demF) * 2 * rateDemandFP;
    }

    value += e.usageP * rateUsageP;
    value += e.usageFP * rateUsageFP;
  });

  return value;
}

export function bestDemand(lastItems, lastBlueItems, demF, demP) {
  // Input: 1- list of objects (lastItems) - Object: {demandP, demandFP, usageP, usageFP, type, rates}. Restriction: Types must be 1 or 2.
  //          rates(inside listItems): {rateUsageP, rateUsageFP, rateDemandFP}.
  //        2- list of objects (lastBlueItems) - Object: {demandP, demandFP, type}
  // Output: tuple of objects (resultBlue, resultGreen) - Object: {value, df, dp}
  // Purpose: Return an object with the best demandFP, demandP for each type (green and blue) with the cost.

  const rates_blue = {
    rateUsageP: 0.6691001,
    rateUsageFP: 0.4577825,
    rateDemandP: 56.4255609,
    rateDemandFP: 16.6779735
  };
  const rates_green = {
    rateUsageP: 2.0387023,
    rateUsageFP: 0.4577825,
    rateDemandP: 0,
    rateDemandFP: 16.6779735
  };

  let dProfile = demandProfile(lastBlueItems);
  let newList = prepareDemands(lastItems, dProfile);

  const resultBlue = costBlue(newList, rates_blue);
  const resultGreen = costGreen(newList, rates_green);
  const costNow = cost(newList, rates_blue, rates_green, demF, demP);
  const costTime = newList.length;

  return [resultBlue, resultGreen, costNow, costTime];
}
