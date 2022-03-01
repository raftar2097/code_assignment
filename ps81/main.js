const { readline, print } = require('@ip-algorithmics/codeforces-io');



function solve(){
    let inp = readline().replace(/(\r\n|\n|\r)/gm, "").split(' ');
    let x = parseInt(inp[0],10);
    let k = parseInt(inp[1],10);
    let d = parseInt(inp[2],10);
    X = Math.abs(x);
    if(x/d>k)
        print(x-k*d);
    else{
        let y = x%d;
        let tt = x/d;
        if((k-tt)%2==1)
            y = Math.abs(d-y);
        print(y);
    }
}




function main(){
    let inp = readline().replace(/(\r\n|\n|\r)/gm, "").split(' ');
    let t = inp[0];
    for(let i=0;i<t;i++){
        solve();
    }
}

main();