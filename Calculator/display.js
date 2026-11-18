// display result 
export const displayResult = (interest) => { 
 
    const result = document.getElementById("result"); 
 
    result.innerText = `Simple Interest = ₹${interest.toFixed(2)}`; 
 
};


