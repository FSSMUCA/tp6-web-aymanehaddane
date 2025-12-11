const form = document.getElementById("calcForm");
const historyList = document.getElementById("history");

let history = [];

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const a = document.getElementById("numberA").value;
    const b = document.getElementById("numberB").value;
    const op = document.getElementById("operation").value;
     
    // Validation
    if (a === "" && b === "") {
        alert("Veuillez remplir les deux nombres.");
        return;
    }
    else if (a === "") {
        alert("Veuillez remplir le nombre A.");
        return;
    }
    else if (b === "") {
        alert("Veuillez remplir le nombre B.");
        return;
    }

    if (op === "/" && Number(b) === 0) {
        alert("Division par zéro interdite !");
        return;
    }

    // Calcul 
    const numA = Number(a);
    const numB = Number(b);
    let result;
    
    switch (op) {
        case "empty":alert("Aucune opération choisie."); return;
        case "+": result = numA + numB; break;
        case "-": result = numA - numB; break;
        case "*": result = numA * numB; break;
        case "/": result = numA / numB; break;
    }
    
    // Ajout à l’historique
    if (op != "empty") {
        const entry = `${numA} ${op} ${numB} = ${result}`; 
        history.push(entry);
        updateHistory();
    }
});

function updateHistory() {
    historyList.innerHTML = ""; // Clear 
   
    for(let i=0;i<history.length;i++){
       const li = document.createElement("li");
       li.textContent = history[i];
       document.getElementById("history").appendChild(li); // Ajout li 
    }
}
