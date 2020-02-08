function myFunction() {
    var inpObj = document.getElementById("age");
    if (!inpObj.checkValidity()) {
      document.getElementById("demo").innerHTML = inpObj.validationMessage;
    } else {
      document.getElementById("demo").innerHTML = "Input OK";
    } }
  
/*---------------------------mobile box */

  function getCodeBoxElement(index) {
    return document.getElementById('codeBox' + index);
  }
  function onKeyUpEvent(index, event) {
    const eventCode = event.which || event.keyCode;
    if (getCodeBoxElement(index).value.length === 1) {
      if (index !== 10) {
        getCodeBoxElement(index + 1).focus();
      } else {
        getCodeBoxElement(index).blur();
        // Submit code
        console.log('submit code ');
      }
    }
    if (eventCode === 8 && index !== 1) {
      getCodeBoxElement(index - 1).focus();
    }
  }
  function onFocusEvent(index) {
    for (item = 1; item < index; item++) {
      const currentElement = getCodeBoxElement(item);
      if (!currentElement.value) {
          currentElement.focus();
          break;
      }
    }
  }
  //<--------------------------------------------------------------------------------->
  
  const key ="loKey";
        if(localStorage.getItem(key)){
            var ar = JSON.parse(localStorage.getItem(key));
        }else{
            console.log("........... NO localStorage  ..");
            var ar = [];
        }
        
        $(document).ready(function(){
            $("input[type='radio']").change(function(){
            if($(this).val()=="other")
            {
            $("#otherAnswer").show();
            }
            else
            {
            $("#otherAnswer").hide(); 
            }
            });
            });
            $(document).ready(function(){
                $("input[type='radio']").change(function(){
                if($(this).val()=="other1")
                {
                $("#otherAnswer1").show();
                }
                else
                {
                $("#otherAnswer1").hide(); 
                }
                });
                });
    













        
        function myFun(){

            var obj1 = document.getElementById("fname");
            var obj3 = document.getElementById("lname");
            var obj2 = /^[a-zA-Z]+$/;
          var obj4 = document.getElementById("age");
          var obj5 = /^[0-9]+$/;
          var obj6 = document.getElementById("email");
          var obj8 = document.getElementById("codeBox1");
          var obj9 = document.getElementById("postal-code");
          var k=0;
          if(!((obj1.value.match(obj2)) && (obj3.value.match(obj2)))){
              k=1;
            alert("Name Not Valid ");
            
        }
        if(!((obj4.value.match(obj5)) && (obj4.value>18) && (obj4.value<60))){
            k=1;
            alert("Age Not Valid ");
        }
       
          obj7 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(!(obj6.value.match(obj7)))
{
    k=1;
    alert("You have entered an invalid email address!");
}
if(!((obj8.value)>0)){
    k=1;
    alert("Number Not Valid ");
}
if(!((obj9.value.match(obj5)) && (obj9.value>99999) && (obj9.value<1000000))){
    k=1;
    alert("Pin Not Valid ");
}
var x = document.getElementById("myRadio").value;
  document.getElementById("demo").innerHTML = x;
  var y = document.getElementById("myRadio1").value;
  document.getElementById("demo9").innerHTML = y;

if(k==0){
        var a = document.getElementById("myForm").elements[0].value; 
        var b = document.getElementById("myForm").elements[1].value;
      //  var c = document.getElementById("myForm").elements[3].value; 
        var d= document.getElementById("myForm").elements[4].value;
        var e = document.getElementById("myForm").elements[5].value; 
        var f = document.getElementById("myForm").elements[6].value;
        var g = document.getElementById("myForm").elements[7].value; 
        var h = document.getElementById("myForm").elements[8].value;
        var i = document.getElementById("myForm").elements[9].value; 
        var j = document.getElementById("myForm").elements[10].value;
        var k = document.getElementById("myForm").elements[11].value; 
        var l = document.getElementById("myForm").elements[12].value;
        var m = document.getElementById("myForm").elements[13].value; 
        var n = document.getElementById("myForm").elements[14].value;
        var o = document.getElementById("myForm").elements[15].value; 
        var p = document.getElementById("myForm").elements[16].value;
        var q = document.getElementById("myForm").elements[17].value; 
        var r = document.getElementById("myForm").elements[18].value;
        var t = document.getElementById("myForm").elements[20].value;
       /* var u = document.getElementById("myForm").elements[21].value; 
        var v = document.getElementById("myForm").elements[22].value;
        var w = document.getElementById("myForm").elements[23].value; 
        var x = document.getElementById("myForm").elements[24].value;
        var y = document.getElementById("myForm").elements[25].value; 
        var z = document.getElementById("myForm").elements[26].value;
        var a1 = document.getElementById("myForm").elements[27].value; 
        var b2 = document.getElementById("myForm").elements[28].value;
        var b3 = document.getElementById("myForm").elements[29].value;
        var b4 = document.getElementById("myForm").elements[30].value;*/


        var ob = {
            "fn":a,
            "ln":b,
    
            
            "mob1":d,
            "mob2":e,
            "mob3":f,
            "mob4":g ,
            "mob5":h,
            "mob6":i ,
            "mob7":j,
            "mob8":k,
            "mob9":l,
            "mob10":m,
            "ad1":n,
            "ad2":o,
            "city":p,
            "state":q,
            "country":r,
            "zip":t,
            "pref":x,
            "pack":y
        }

            ar.push(ob);           
            localStorage.setItem(key, JSON.stringify(ar));
        var retr = localStorage.getItem(key);
        var dat = JSON.parse(retr);
        console.log(dat);


       // <a href="thirdPage.html"
         //   />
        parent.location="thirdPage.html";





 
        }
    }