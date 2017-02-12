
  //The cool cacluclator
   function action(action_type){
    var value1=document.querySelector('.input1').value;
    var value2=document.querySelector('.input2').value;
   if (action_type=='-'){
    var total= parseInt(value1) - parseInt(value2);
   console.log(action_type);
   }else if (action_type=='+'){
    var total= parseInt(value1) + parseInt(value2);
   console.log(action_type);
   }else if (action_type=='*'){
    var total= parseInt(value1) * parseInt(value2);
   console.log(action_type);}
   else if (action_type=='/'){
    var total= parseInt(value1) / parseInt(value2);
   console.log(action_type);}
     console.log("result is"+total);
}

//The real cacluclator
var firstnum='';
var secondnum='';
var resultis=null;
var selectedaction=null;

function numbutton(pressedbtn){
    if (pressedbtn == '+'||pressedbtn == '-'||pressedbtn == '*'||pressedbtn == '/'){
        if (secondnum){
            secondnum='';
            document.querySelector('.userinput').textContent=firstnum+' '+selectedaction;
        }else if(firstnum){
            selectedaction=pressedbtn;
            document.querySelector('.userinput').textContent=firstnum+' '+selectedaction;
        }else{
            alert('Please Select a Number First');
        }
    }else if (pressedbtn == '='){
        if (secondnum){
        switch (selectedaction){
            case '+':
                var resultis= parseFloat(firstnum) + parseFloat(secondnum);
            break;
            case '-':       
                var resultis= parseFloat(firstnum) - parseFloat(secondnum);
            break;
            case '*':       
                var resultis= parseFloat(firstnum) * parseFloat(secondnum);
            break;
            case '/':       
                var resultis= parseFloat(firstnum) / parseFloat(secondnum);
            break;
        }
        document.querySelector('.userresult').textContent='='+resultis;
        //reset numbers & action
        selectedaction=false;
        firstnum='';
        secondnum='';
        }else{
            alert('Not Enough Data to Caclulate');
        }
        //a number was selected + check if an action was on true-decide how to caclulate
        }else if (pressedbtn == '0'||pressedbtn == '1'||pressedbtn == '2'||pressedbtn == '3'||pressedbtn == '4'||pressedbtn == '5'||pressedbtn == '6'||pressedbtn == '7'||pressedbtn == '8'||pressedbtn == '9'||pressedbtn == '.'){
        if (selectedaction){ //if an action was selected, save it to secondnum
            secondnum=secondnum+pressedbtn;
            document.querySelector('.userinput').textContent=firstnum+' '+selectedaction+' '+secondnum;
         }
        else{
         // no action was selected, save it to the firstnum and print to user current number
        firstnum=firstnum+pressedbtn;
        document.querySelector('.userinput').textContent=firstnum;
           }
    }else if(pressedbtn =='C'){
        firstnum='';
        secondnum='';
        resultis='';
        selectedaction='';
        document.querySelector('.userinput').textContent='';
        document.querySelector('.userresult').textContent='';
    }
    else{
        alert("I can only calculate 2 numbers at a time")
    }
}

