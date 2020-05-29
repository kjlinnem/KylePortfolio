function calcExpense(element){
    var budgetTable = document.getElementById("budget");
    var salary = document.getElementById("salary");

    if(parseFloat(salary.value)){
        for( var i =1; i < budgetTable.rows.length-1; i++){
            budgetTable.rows[i].cells[2].innerHTML = parseFloat(salary.value) * (parseFloat(budgetTable.rows[i].cells[1].innerHTML) *.01) ;
            budgetTable.rows[i].cells[3].innerHTML = ((parseFloat(salary.value) * (parseFloat(budgetTable.rows[i].cells[1].innerHTML) *.01)) / 12).toFixed(2);
        }
        calcTotal();
    }else{
        alert("Enter correct salary amount.");
        salary.value = "";
    }
}

function calcTotal(){
    var budgetTable = document.getElementById("budget");
    var total = 0;

    for( var i =1; i < budgetTable.rows[i].cells.length; i++){
        for( var j =1; j < budgetTable.rows.length-1; j++){
            total += parseFloat(budgetTable.rows[j].cells[i].innerHTML);
            //alert(total);
        }
        if(total){
            budgetTable.rows[j].cells[i].innerHTML = total;
        }
        total = 0;
        
    }
}