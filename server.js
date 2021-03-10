
//our test arrays - the first can't be divided equally by 4 but the evenArray can
try {
    let array = [1, 4, 2, 6, 7, 3, 4, 2, 6, 4, 7, 8, 4, 3]
    let evenArray = [1, 4, 2, 6, 7, 3, 4, 2, 6, 4, 7, 8]
    let twigArray = [1, 2, 3, 4, 5]
    let twigDivider = 3;
    let divider = 4;

    //call our function and get result
    let result = returnContents(array, divider);
    let evenResult = returnContents(evenArray, divider);
    let twigResult = returnContents(twigArray,twigDivider);

    //display the results to the user
    console.log("\n------- Welcome to the Array Divider App! ----------\n");
    console.log(`This array input has ${array.length} items`, array);
    console.log("The divider that can't be divided equally is ", divider);
    console.log("The result is", result);

    console.log(`\nThis array input has ${evenArray.length} items`, evenArray);
    console.log("The divider that can be divided equally is ", divider);
    console.log("The result is", evenResult);


    console.log(`\nThis Twig array input has ${twigArray.length} items`, twigArray);
    console.log("The twig divider is ", twigDivider);
    console.log("The result is", twigResult);   

    //divide our array into new arrays and return results including any remainders
    function returnContents(array, divider) {      

        let remainder = (array.length % divider);
        let arraysize = (array.length / divider);
        let arraysizeClean = Math.round(arraysize);
        let newarrays = [];
        let counter = 0
        let finished = false;

        for (let x = 0; x < divider; x++) {
            let newarray = [];            
            for (let y = 0; y < arraysizeClean; y++) {

                if(counter == array.length)
                {
                    finished = true;
                    if(newarray.length > 0)
                        newarrays[x] = newarray;         
                    break;
                }                
                newarray.push(array[counter]);               
                counter++;
            }
            if(!finished)
                newarrays[x] = newarray;
        }

        //add on remaining values that didnt divide evenly
        if (remainder != 0 && !finished) {
            let newarray = [];
            for (let x = 0; x < remainder; x++) {
                newarray.push(array[counter]);
                counter++;
            }
            newarrays[newarrays.length] = newarray;
        }
        return newarrays;
    }
}
catch (error) {
    console.log("An error occured! ", error.message);
}




