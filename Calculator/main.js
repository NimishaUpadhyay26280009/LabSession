import { calculateInterest } from './interest.js'; 
 
import { displayResult } from './display.js'; 
 
 
const button = document.getElementById("calculate"); 
 
 
button.addEventListener("click", () => { 
 
 
    const p = Number(document.getElementById("principal").value); 
 
    const r = Number(document.getElementById("rate").value); 
 
    const t = Number(document.getElementById("time").value); 
 
 
    if (p <= 0 || r <= 0 || t <= 0) { 
        document.getElementById("result").innerText = 
            "Please enter valid positive values."; 
        return; 
    } 
 
    let interest = calculateInterest(p, r, t); 
 
    displayResult(interest); 
 
});