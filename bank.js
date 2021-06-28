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
     const depositAmount=document.getElementById("depositAmount").value;
     const depositNumber=parseFloat(depositAmount);
     
     const currentDeposit=document.getElementById("currentDeposit").innerText;
     const currentDepositNumber=parseFloat(currentDeposit);
     const totalDeposit=currentDepositNumber+depositNumber;

     document.getElementById("currentDeposit").innerText=totalDeposit;
     document.getElementById("depositAmount").value="";

     const currentBalance=document.getElementById("currentBalance").innerText;
     const currentBalanceNumber=parseFloat(currentBalance);
     const totalCurrent=currentBalanceNumber+totalDeposit;

     document.getElementById("currentBalance").innerText=totalCurrent;
  })

  //Withdraw-Button
  const withdrawButton=document.getElementById("withdrawBtn");
  withdrawButton.addEventListener("click",function(){
     const withdrawAmountButton=document.getElementById("withdrawAmount").value;
     const withdrawNumber=parseFloat(withdrawAmountButton);
     console.log(withdrawNumber)
     
     const currentWithdraw=document.getElementById("currentWithdraw").innerText;
     const currentWithdrawNumber=parseFloat(currentWithdraw);
     const totalwithdraw=currentWithdrawNumber+withdrawNumber;

     document.getElementById("currentWithdraw").innerText=totalwithdraw;
     document.getElementById("withdrawAmount").value="";

     const currentBalance=document.getElementById("currentBalance").innerText;
     const currentBalanceNumber=parseFloat(currentBalance);
     const totalCurrent=currentBalanceNumber-totalwithdraw;

     document.getElementById("currentBalance").innerText=totalCurrent;
  })