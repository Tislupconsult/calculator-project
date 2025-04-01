

// Function to display
function valueToDisplay(value){
    let display = document.getElementById("display");
    if(display.value.length < 20){
        display.value += value;
    }
}

// Function to clear all value displayed
function clearAllDisplay(){
    document.getElementById("display").value = "";
}

// Function to delete value displayed
function deleteValueDisplay(){
    let display = document.getElementById("display"); 
    display.value = display.value.toString().slice(0, -1);
}

// Function that calculates the values
function calculate(){
    let display = document.getElementById("display"); 
    try{
        if(display.value.trim() === " "){
            display.value = "0";
        }else{
            display.value = eval(display.value);
        }
        
    }
    catch (error){
        display.value = "Err";
    }
}
