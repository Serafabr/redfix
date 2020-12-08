export default function handleDates(event) {
  // Input:
  // Any text inserted by the user in initialDate or finalDate in FormDates component
  // 
  // Output:
  // Updated date input, in mm/yyyy format
  //
  // Purpose:
  // Provide date inputs with friendly UI/UX and to functions and components of the app

  const { name, value } = event.target;
  let { selectionStart } = event.target;
  const justNumbers = value.replace(/\D/g, "");
  event.persist();

  if (value.length > 7) {
    return;
  }

  if (value.length === 3 && value[2] === "/") {
    this.setState({
      [name]: value
    });
    return;
  } else if (value.length === 3 && value[2] !== "/") {
    selectionStart += 1;
  }

  if (justNumbers.length <= 2) {
    this.setState({
      [name]: justNumbers
    });
  } else {
    const newDate =
      justNumbers.slice(0, 2) + "/" + justNumbers.slice(2, justNumbers.length);
    this.setState(
      () => ({
        [name]: newDate
      }),
      () => {
        event.target.setSelectionRange(selectionStart, selectionStart);
      }
    );
  }
}
