let i = -1

function addElement() {


    while(i < 20){
    i = i+1;
    var table = document.getElementById("Table");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = i+"!";
    


    let yesss = Factorialize(i)
    console.log("The factorial of " + i + " is " + yesss);
    
    cell2.innerHTML = yesss;
  }

}


function Factorialize(x){
    if( x == 0 || x == 1){
        return 1;
    }
    else{
        return x * Factorialize(x - 1);
    }
}

  addElement();
  
