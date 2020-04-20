function solve(arr){

    let weaponName = arr.shift().split("|");
    
    
    for(let i = 0; i<arr.length; i++){
        let [command, move, index] = arr[i].split(" ");
        index = Number(index);

        let allCommand = command + " " + move;
        
        let odd = [];
        let even = [];
        if(command == "Done"){
            break;
        }

        switch(allCommand){
            case "Move Left":
                if(index > 0 && index <= weaponName.length){
                    let indexValue = weaponName[index];
                    let indexValue2 = weaponName[index-1];
                     
                    weaponName[index] = indexValue2;
                    weaponName[index-1] = indexValue;
                }
                break;
            case "Move Right":
                if( index >= 0 && index < (weaponName.length-1)){
                    let indexValue = weaponName[index];
                    let indexValue2 = weaponName[index+1];
                    
                    weaponName[index] = indexValue2;
                    weaponName[index+1] = indexValue;
                }
                break;
            case "Check Even":
                   for(let j = 0; j< weaponName.length; j++){
                       if(j % 2 === 0){
                           even.push(weaponName[j]);
                       }
                   }
                   console.log(even.join(" "));
                break;
            case "Check Odd":
                for(let k = 0; k< weaponName.length; k++){
                    if(k % 2 === 1){
                        odd.push(weaponName[k]);
                    }
                }
                console.log(odd.join(" "));
                break;
            default:
                break;

        }
        
    }
    
    console.log(`You crafted ${weaponName.join("")}!`);
    
}

solve(['Ve|or|nd|st|ke|ri',
    'Check Even',
    'Move Right 5',
    'Move Left 2',
    'Move Left 0',
    'Move Right 4',
    'Done']);
