function getTextElementValueById(elementId){
    const phoneTotalElement =document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal = parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}

function calculateSubTotal(){
    // calculate total
    const currentPhoneTotal =document.getElementById('phone-total');
    const currentCaseTotal = document.getElementById('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    const subTotalElement =document.getElementById('sub-total');
    subTotalElement.innerText = currentSubTotal;
    return currentSubTotal;
}