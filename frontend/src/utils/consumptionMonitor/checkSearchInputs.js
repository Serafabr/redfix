export default function checkSearchInputs(initialDate, finalDate, oneMonth){
  
  // Generate currentMonth and currentYear for comparison
  let today = new Date();

  // Get current month (returns 0 for January; returns 1 for February; etc.)
  // Attention: current month is kept like this because the app must only allow
  // search of past months. The database table is updated with last month data
  // when a new month starts (e.g.: when August begins, database will be
  // updated with July data. During that August, users will receive an error
  // message if they try to search current month data).
  let currentMonth = today.getMonth();
  let currentYear = today.getFullYear().toString();
  if(currentMonth < 10){
    currentMonth = "0" + currentMonth.toString();
  } else {
    currentMonth = currentMonth.toString();
  }
  
  // initialDate check
  // These conditions are applied for both cases (one month or period)
  
  // Incomplete input
  if(initialDate.length < 7)
  return {checkBool: false, message: "Verifique o mês inicial."};

  // Non-existent month
  if(initialDate.slice(0, 2) > "12")
  return {checkBool: false, message: "Mês inicial inexistente."};

  // Non-existent month
  if(initialDate.slice(0, 2) === "00")
  return {checkBool: false, message: "Mês inicial inexistente."};

  // Non-existent year in database
  if(initialDate.slice(3) < "2017")
  return {checkBool: false, message: "Mês inicial não consta no banco de dados."};
  
  // Non-existent year in database
  if(initialDate.slice(3) > currentYear)
  return {checkBool: false, message: "Mês inicial não consta no banco de dados."};

  // Non-existent month in database
  if(initialDate.slice(3) === currentYear && initialDate.slice(0, 2) > currentMonth)
  return {checkBool: false, message: "Mês inicial não consta no banco de dados."};
  
  // finalDate check
  // These conditions are applied only for period case
  if(!oneMonth){

    // Same dates
    if(initialDate === finalDate)
    return {checkBool: false, message: "Mês final igual ao mês inicial."};

    // Incomplete input
    if(finalDate.length < 7)
    return {checkBool: false, message: "Verifique o mês final."};
    
    // Non-existent month
    if(finalDate.slice(0, 2) > "12")
    return {checkBool: false, message: "Mês final inexistente."};

    // Non-existent month
    if(finalDate.slice(0, 2) === "00")
    return {checkBool: false, message: "Mês final inexistente."};

    // Non-existent year in database
    if(finalDate.slice(3) < "2017")
    return {checkBool: false, message: "Mês final não consta no banco de dados."};

    // Non-existent year in database
    if(finalDate.slice(3) > currentYear)
    return {checkBool: false, message: "Mês final não consta no banco de dados."};

    // Non-existent month in database
    if(finalDate.slice(3) === currentYear && finalDate.slice(0, 2) > currentMonth)
    return {checkBool: false, message: "Mês final não consta no banco de dados."};

    // initialDate after finalDate (year check)
    if(initialDate.slice(3) > finalDate.slice(3))
    return {checkBool: false, message: "Mês inicial posterior ao mês final."};

    // initialDate after finalDate (same year, month check)
    if(initialDate.slice(3) === finalDate.slice(3) && initialDate.slice(0, 2) > finalDate.slice(0, 2))
    return {checkBool: false, message: "Mês inicial posterior ao mês final."};
  
  }
  
  // Run this line only if everything is OK
  return {checkBool: true, message: ""};

}