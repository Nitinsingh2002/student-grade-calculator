
var result=document.getElementById('para');
var btn = document.getElementsByTagName('button')
var claerall=document.getElementById("claer");

btn[0].addEventListener("click", function () {

   var web = document.getElementById("web").value;
    var maths = document.getElementById('math').value;
    var science = document.getElementById('science').value;
    var sst = document.getElementById('sst').value;



  




    claerall.style.color="Red"
    claerall.style.cursor="pointer"
  claerall.style.visibility="visible"


    var total = parseFloat(web) + parseFloat(maths) + parseFloat(science) + parseFloat(sst);

    if (isNaN(total)) {
      result.innerHTML="please provide correct Marks..."
      return;
      }
      else if(total>400){

        result.innerHTML="Ohh, look like you enter wrong marks... marks can't be more than 100"
        return;
      }
      
    
    console.log(total)
    var percentage = (total * 100) / 400;
    console.log(percentage)


    if (percentage >= 90 && percentage <= 100  && this.value <100) {
        var grade = "A++";
        console.log(grade)
        
        result.innerHTML = "out of 400 your Marks is "+total+  " your percentage is " + percentage +" your grade is " +grade+" .so you are pass";

    }
    else if (percentage >= 80 && percentage < 90) {
        var grade = "A";
        result.innerHTML = "out of 400 your Marks is "+total+  " your percentage is " + percentage +" your grade is " +grade+" .so you are pass";
    }
    else if (percentage >= 70 && percentage < 80) {
        var grade = "B";
        result.innerHTML = "out of 400 your Marks is "+total+  " your percentage is " + percentage +" your grade is " +grade+" .so you are pass";
    }
    else if (percentage >= 60 && percentage < 70) {
      
        var grade = "D";
        result.innerHTML = "out of 400 your Marks is "+total+  " your percentage is " + percentage +" your grade is " +grade+" .so you are pass";
    }
    else if (percentage >= 50 && percentage < 60) {
        var grade = "E";
        result.innerHTML = "out of 400 your Marks is "+total+  " your percentage is " + percentage +" your grade is " +grade+" .so you are pass";
    }

    else{
        result.innerHTML = "out of 400 your Marks is "+total+  " your percentage is " + percentage +" .so you are fail";
    }
 
});


claerall.addEventListener('click',function(){
    result.innerHTML=null
    web.value=null
    math.value=null
    science.value=null
    sst.value=null
    claerall.style.visibility="hidden";

})





// out of 400 your total is 260 and percentage is 74% .your grade is B. you are pass