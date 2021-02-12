//function used to return the initial letters of the first and last names
const initials = function(item) {
    const names = item.split(' ');  //split string into array of multiple strings using whitespaces as separator
    const namesOfInterest = [names[0], names[names.length - 1]]; //includes only the first and last string
    const initials = namesOfInterest.map((item) => item[0]); //extracts the first letter of each string

    //assembles initials string into a single string to be returned
    let assembledInitials = "";
    initials.map((item) => {
        assembledInitials = assembledInitials.concat(item);
    });
    
    return assembledInitials;
}

export default initials;