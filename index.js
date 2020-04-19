//declare a function accepting a parameter (a whole number/integer)    
function numberToStrings(number){

    //declare the the empty array to be returned
    let arr = [];

    //initialize the expected string output variable
    let display;
    
    //checks to satisy given conditions
    for(let counter = 1; counter <= number; counter++){
        
        if (counter % 2 === 0 && counter % 3 === 0 % counter % 5 === 0){
            display = "yu-gi-oh";
        } else if (counter % 3 === 0 && counter % 5 === 0) {
            display = "gi-oh";
        } else if (counter % 2 === 0 && counter % 5 === 0){
            display = "yu-oh";
        } else if (counter % 2 === 0 && counter % 3 === 0){
            display = "yu-gi";
        } else if (counter % 2 === 0){
            display = "yu";
        } else if (counter % 3 === 0){
            display = "gi";
        } else if (counter % 5 === 0){
            display = "oh";
        } else{
            display = counter;
        }
        
        //Push the items into the empty array from the string output variable
        arr.push(display);

    };
    
        //Logs the array to the console
        console.log(arr);  
                    
};
  //Call function with random numbers 
numberToStrings(100);
numberToStrings(50);
   