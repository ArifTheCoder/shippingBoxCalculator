function getBoxes(){

    // get the bag amount and cubic box size from input fields
    const bageAmount200 = document.getElementById("twoHun").value;
    const bageAmount400 = document.getElementById("fourHun").value;
    const bageAmount1000 = document.getElementById("thousand").value;
    const cubicBoxSize = document.getElementById("cubicBox").value;
    
    // check the input values if they are valid input
    if ((isNaN(bageAmount200) || !Number.isInteger(Number(bageAmount200)) ||(bageAmount200 < 0)) || (isNaN(bageAmount400) || !Number.isInteger(Number(bageAmount400)) || (bageAmount400 < 0)) || (isNaN(bageAmount1000) || !Number.isInteger(Number(bageAmount1000)) || (bageAmount1000 < 0)) || (isNaN(cubicBoxSize) || !Number.isInteger(Number(cubicBoxSize)))){
        document.getElementById("bageErrMsg").innerHTML = "Invalid input! Please enter a positive integer value in all fields.";
    }else if (cubicBoxSize < 30 || cubicBoxSize > 100){
        document.getElementById("errMsgcub").innerHTML = "Edge length should be beween 30cm - 100cm";
        
        
    }else {      // calculate the volumes when it's valid input
        const bageVolume200 = calculateBageVolume200(bageAmount200);    
        const bageVolume400 = calculateBageVolume400(bageAmount400);
        const bagVolume1000 = claculateBageVolume1000(bageAmount1000);
        const cubicBoxVolume = calculateCubicBoxVolume(cubicBoxSize);

        // calculate the total volume of all bages
        const totalBageVolume = (bageVolume200 + bageVolume400 + bagVolume1000);

        // calculate the required cubic box
        calculateCubicBoxNumber(cubicBoxVolume, totalBageVolume);
    }

}

// function to calculate the bag volume of 200g
function calculateBageVolume200(bageAmount200){
    const width = 16;
    const height = 23;
    const length = 2;

    const volume = (width * height * length);

    return (volume * bageAmount200);
}

// function to calculate the bag volume of 400g
function calculateBageVolume400(bageAmount400){
    const width = 22;
    const height = 26;
    const length = 2;

    const volume = (width * height * length);

    return (volume * bageAmount400);
}

// function to calculate the bag volume of 1000g
function claculateBageVolume1000(bageAmount1000){
    const width = 14;
    const height = 26;
    const length = 10;

    const volume = (width * height * length);

    return (volume * bageAmount1000);
}

// function to calculate the cubic box volume
function calculateCubicBoxVolume(cubicBoxSize){

    return (cubicBoxSize * cubicBoxSize * cubicBoxSize);
}

// function to calculate the required cubic box
function calculateCubicBoxNumber(cubicBoxVolume, totalBageVolume){
    const totalBox = Math.ceil(totalBageVolume / cubicBoxVolume);

    document.getElementById("boxResult").innerHTML = "Total boxes need: " + totalBox;
}
