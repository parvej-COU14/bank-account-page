// Login-Button

const loginBtn=document.getElementById("login");
loginBtn.addEventListener('click',function(){
   const loginArea=document.getElementById("loginForm");
   loginArea.style.display="none";
   const transitionArea=document.getElementById("Transition-area");
   transitionArea.style.display="block"
})

//Deposit-Button
  const depositBtn=document.getElementById("deposit");
  depositBtn.addEventListener("click",function(){
     const depositNumber=getInput("depositAmount");

     document.getElementById("depositAmount").value="";
     updateSpanText("currentDeposit",depositNumber);
     updateSpanText("currentBalance",depositNumber);
 
  })

//Withdraw-Button

  const withdrawButton=document.getElementById("withdrawBtn");
  withdrawButton.addEventListener("click",function(){
     const withdrawNumber=getInput("withdrawAmount");
     updateSpanText("currentWithdraw",withdrawNumber);
     document.getElementById("withdrawAmount").value="";
     updateSpanText("currentBalance",-1*withdrawNumber)
     
  })
    
  function getInput(id){
   const withdrawAmount=document.getElementById(id).value;
   const withdrawNumber=parseFloat(withdrawAmount);
   return withdrawNumber;
  }

  function updateSpanText(id,depositNumber){
   const currentBalance=document.getElementById(id).innerText;
   const currentBalanceNumber=parseFloat(currentBalance);
   const totalBalance=currentBalanceNumber+depositNumber;
   document.getElementById(id).innerText=totalBalance;
  }
