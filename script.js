function executeDiscount(){
  const amount = parseInt(document.getElementById('amount').value);
  const save = document.getElementById('save')
  const total = document.querySelector('#total')
  // const valueInput = document.getElementById('valueInput')
  // valueInput.addEventListener("input",executeDiscount())
      if (amount >= 10000){
        const discount = amount * 0.15
        const pay = amount - discount
        save.textContent= `Discount:${discount}`
        total.textContent = `Amount:${pay}`
      }
      else if (amount >= 5000 && amount < 10000){
        const discount = amount * 0.1
        const pay = amount - discount
        save.textContent=`Discount:${discount}`
        total.textContent= `Amount:${pay}`
        
      }
      else if (amount >= 3000 && amount < 4999){
        const discount = amount * 0.05
        const pay = amount - discount
        save.textContent=`Discount:${discount}`
        total.textContent= `Amount:${pay}`
        
      }
      else if (amount < 3000){
        const discount = 0.00
        const pay = amount - discount
        save.textContent=`Discount:${discount}`
        total.textContent= `Amount:${pay}`
        
      }
     
     else{

      alert("Invalid Input")
     }


  
}
