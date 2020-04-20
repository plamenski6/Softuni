function solve(input){

    let tanks = input.shift().split(", ");
    
    for(let i of input.slice(1)){
        let cmd = i.split(", ");
    
        switch(cmd[0]){
            case "Add":
                if(tanks.includes(cmd[1])){
                    console.log("Tank is already bought");
                } else {
                    tanks.push(cmd[1]);
                    console.log("Tank successfully bought");
                }
                break;
            case "Remove":
                if(tanks.includes(cmd[1])){
                    let index = tanks.indexOf(cmd[1]);
                    tanks.splice(index, 1);
                    console.log("Tank successfully sold");
                } else {
                    console.log("Tank not found");
                }
                break;
            case "Remove At":
                if(cmd[1] >= 0 && cmd[1] <= tanks.length){
                    tanks.splice(cmd[1],1);
                    console.log("Tank successfully sold");
                } else {
                    console.log("Index out of range");
                }
                break;
            case "Insert":
                if(cmd[1] >= 0 && cmd[1] <= tanks.length){
                    if(!tanks.includes(cmd[2])){
                        tanks.splice(cmd[1],0,cmd[2]);
                        console.log(`Tank successfully bought`);
                    } else{
                        console.log(`Tank is already bought`);
                    }
                } else {
                    console.log(`Index out of range`);
                }
                break;
        }
    }

    console.log(tanks.join(", "));

}

   solve([
     'T-34-85 Rudy, SU-100Y, STG',
     '3',
     'Add, King Tiger(C)',
     'Insert, 2, IS-2M',
     'Remove, T-34-85 Rudy'
   ]);
