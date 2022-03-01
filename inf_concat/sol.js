const { readline, print } = require('@ip-algorithmics/codeforces-io');



function val(sum,X,N){
    return (sum[X%N]+((Math.floor(X/N)%M)*sum[N])%M)%M;
}


function solve(){
    let inp = readline().replace(/(\r\n|\n|\r)/gm, "").split(' ');
    let T = parseInt(inp[0],10);
    while(T--){
        inp = readline().replace(/(\r\n|\n|\r)/gm, "").split(' ');
        let N = parseInt(inp[0],10);
        let arr = [];
        inp = readline().replace(/(\r\n|\n|\r)/gm, "").split(' ');
        for(let i=1;i<=N;i++){
            arr[i] = parseInt(inp[i-1],10);
        }
        inp = readline().replace(/(\r\n|\n|\r)/gm, "").split(' ');
        let Q = parseInt(inp[0],10);
        let L = new Array(Q).fill(0);
        let R = new Array(Q).fill(0);
        inp = readline().replace(/(\r\n|\n|\r)/gm, "").split(' ');
        for(let i=0;i<Q;i++){
            L[i] = parseInt(inp[i],10);
        }
        inp = readline().replace(/(\r\n|\n|\r)/gm, "").split(' ');
        for(let i=0;i<Q;i++){
            R[i] = parseInt(inp[i],10);
        }
        let sum = new Array(N+1).fill(0);
        sum[0] = 0;
        for(let i=1;i<=N;i++){
            sum[i] = (sum[i-1]+arr[i])%M;
        }
        for(let i=0;i<Q;i++){
            print((val(sum,R[i],N)-val(sum,L[i]-1,N)+M)%M)
        }
    }
}

solve();