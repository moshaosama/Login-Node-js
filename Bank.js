let i =45;
let Dolar ="$"
window.addEventListener("load" ,() => {
    document.getElementById("Inp_Dep").focus();
}) 

document.getElementById("Btn-Dep").addEventListener("click" ,(e) => {
    e.preventDefault();
    i+=Number(document.getElementById("Inp_Dep").value);
    document.getElementById("Salary").innerHTML =Dolar +i;
    document.getElementById("Inp_Dep").value ="";
    if(typeof(document.getElementById("Inp_Dep").value)=='string')
    {
        
    }
    
})

document.getElementById("Btn-Dra").addEventListener("click" ,(e) => {
    e.preventDefault();
    if(Number(document.getElementById("Inp_Dra").value) > i)
    {

        document.getElementById("Error").style.display="inline-block";
        setTimeout(() => {
            document.getElementById("Error").style.display="none";
            document.getElementById("Inp_Dra").value="";
            document.getElementById("Inp_Dra").focus();
        },2000)
    }
    else if(Number(document.getElementById("Inp_Dra").value) == i)
    {
        i=0;
        document.getElementById("Salary").innerHTML =Dolar +i;
        document.getElementById("Inp_Dra").value="";
        document.getElementById("Error").style.display="none";

    }
    else if(Number(document.getElementById("Inp_Dra").value) < i) {
        i-=Number(document.getElementById("Inp_Dra").value);
        document.getElementById("Salary").innerHTML =Dolar +i;
        document.getElementById("Inp_Dra").value ="";
        document.getElementById("Error").style.display="none";
    }
})

document.querySelector(".DarkMood").addEventListener("click" ,() => {
    document.body.style.backgroundColor ="black";
    document.querySelector(".Bank").style.border= "10px white solid";
    document.querySelector(".Text_Dep").style.color="white";
    document.querySelector(".Text_Dra").style.color="white";
    document.querySelector(".Total").style.color="white";
    document.getElementById("Salary").style.color= "white";
    document.querySelector(".DarkMood").style.display ="none";
    document.querySelector(".LightMood").style.display ="block";
})
document.querySelector(".LightMood").addEventListener("click" ,() => {
    document.body.style.backgroundColor ="#848080";
    document.querySelector(".Bank").style.border= "10px black solid";
    document.querySelector(".Text_Dep").style.color="black";
    document.querySelector(".Text_Dra").style.color="black";
    document.querySelector(".Total").style.color="black";
    document.getElementById("Salary").style.color= "black";
    document.querySelector(".DarkMood").style.display ="block";
    document.querySelector(".LightMood").style.display ="none";
})