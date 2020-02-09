function changeToFeet(){
    var heightInCmsInches = document.getElementById("height").value;
    var inchOrCms = document.getElementById("inchCmSelector").value;
    if(inchOrCms == "inches"){
        var realFeet = ((heightInCmsInches) / 12);
        var feet = Math.floor(realFeet);
        var inches = Math.floor((realFeet - feet)* 12);
        document.getElementById("heightInFeet").value =feet;
        document.getElementById("heightInInches").value = inches;
    }else {
        var realFeet = ((heightInCmsInches * 0.393700)/12);
        var feet = Math.floor(realFeet);
        var inches = Math.floor((realFeet = feet)*12);
        document.getElementById("heightInFeet").value =feet;
        document.getElementById("heightInInches").value = inches;
    }
}

//change the height from feet and inches to inches/cms on entering the height int the combobox
function convertToInchesCMs(){
    var inchOrCms=document.getElementById("inchCmSelector").value;
    if(inchOrCms == "inches"){
        var feet = Math.floor(document.getElementById("heightInFeet").value);
        var inches = Math.floor(document.getElementById("heightInInches").value);
        totalCms = ((feet*12)+(inches)) * 2.54;
        document.getElementById("height").value = totalCms;
    }
}

function calculateBMI(){
    var weight = Math.floor(document.getElementById("weight").value);
    if(weight < 0  || weight == ''){
        alert('Please enter your weight');
    }
    var height = Math.floor(document.getElementById("height").value);
    if(height <0 || height == ''){
        convertToInchesCMs();
        height = Math.floor(document.getElementById("height").value);
    }
    var inchOrCms = document.getElementById("inchCmSelector").value;
    var kiloPounds = document.getElementById("weightCombo").value;

    if(inchOrCms == "inches"){
        heightInCms = height * 2.54;
    }else{
        heightInCms = height;
    }

    if(inchOrCms == "pounds"){
        weightInKgs = weight * 0.453592;
    }else{
        weightInKgs = weight;
    }
    
    if(weightInKgs > 0 && heightInCms > 0){
        var finalBMI = weightInKgs/(heightInCms/100*heightInCms/100);
        document.getElementById("bmiValue").value = finalBMI;

        var bmiText;
        if(finalBMI < 18.5){
            bmiText ="Standartın altındasınız.";
        }
        if(finalBMI>18.5 && finalBMI < 25){
            bmiText="Sağlıklısınız.";
        }
        if(finalBMI > 25){
            bmiText="Standartın üstündesiniz.";
        }
        document.getElementById("bmiStat").value = bmiText;
    }
}