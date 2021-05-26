export default function textToArrayCM(file) {
  return new Promise((resolve, reject) => {
    // Initialize reader variable
    let reader = new FileReader();

    // Define function onload
    reader.onload = function(event) {
      // Build array of items to be written in database table
      let arr = event.target.result
        .trim()
        .replace(/(\r\n|\n|\r| |)/gm, "")
        .replace(/,/g, ".")
        .split(";");
      resolve(arr);
    };

    // Read file as text
    reader.readAsText(file);
  });
}
