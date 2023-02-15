function getTextElementValueById(elementId){
    const phoneTotalElement =document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}
function setTextElementValueById(elementId,value){
    const subTotalElement =document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal(){
    // calculate total
    const currentPhoneTotal =getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');

    const currentSubTotal =currentPhoneTotal + currentCaseTotal;
    setTextElementValueById('sub-total',currentSubTotal);

    // calculate tax 
    const taxtAmmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxtAmmount = parseInt(taxtAmmountString);
    setTextElementValueById('tax-amount',taxtAmmount);

    // calculate total
    const finalAmmount = currentSubTotal + taxtAmmount;
    setTextElementValueById('final-total',finalAmmount);
}