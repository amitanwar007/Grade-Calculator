function show_result(){
    let physic = document.querySelector("#physic").value;
    let chemistery = document.querySelector("#chemistery").value;
    let math = document.querySelector("#math").value;
    let english = document.querySelector("#english").value;
    let computer = document.querySelector("#computer").value;

    let total = parseFloat(physic) + parseFloat(chemistery)+ parseFloat(math)+ parseFloat(english)+ parseFloat(computer);

    

    let percentage = (total *100) / 500;

    if(percentage >= 90){
        document.querySelector(".grade").innerHTML = "You got A grade";
    }else if(percentage >= 80){
        document.querySelector(".grade").innerHTML = "You got B grade";
    }else if(percentage >= 70){
        document.querySelector(".grade").innerHTML = "You got C grade";
    }else if(percentage >= 60){
        document.querySelector(".grade").innerHTML = "You got D grade";
    }else if(percentage < 60){
        document.querySelector(".grade").innerHTML = "You got F grade";
    }
    
    
    document.querySelector(".total").innerHTML = "Total marks : " +total;
    document.querySelector(".percentage").innerHTML = "Your average marks are : "+percentage;
    
    if(percentage >30){
        document.querySelector(".result h2").innerHTML = "You are Pass";
        
    }else{
        document.querySelector(".result h2").innerHTML = "You are Fail";

    }
}