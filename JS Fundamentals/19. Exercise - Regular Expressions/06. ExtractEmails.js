function solve(input){

    for(let i of input){
        let regex = /(^|(?<=\s))(([a-zA-Z0-9]+)([\.\-_]?)([A-Za-z0-9]+)(@)([a-zA-Z]+([\.\-_][A-Za-z]+)+))(\b|(?=\s))/gm;
        let match = i.match(regex);
        
        if(match){
            console.log(match.join(" "));
        }
    }

}

solve([ 'Please contact us at: support@github.com.']);
