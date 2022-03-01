const { readline, print } = require('@ip-algorithmics/codeforces-io');






function dfs(node,par,adj,noc){
    noc[node]=1;
    adj[node].forEach(val => {
        if(val!=par){
            dfs(val,node,adj,noc);
            noc[node]+=noc[val];
        }
    });
}




function solve(){
    let prime = new Array(200010).fill(true);
    let adj = new Array(200005);
    let noc = new Array(200005).fill(0);
    prime[0] = false;
    prime[1] = false;
    for(let i=0;i<200005;i++){
        adj[i] = [];
    }
    for(let i=2;i<200005;i++){
        if(prime[i]==true){
            for(let j=i+i;j<200005;j+=i){
                prime[j]=false;
            }
        }
    }
    let input = readline().replace(/(\r\n|\n|\r)/gm, "").split(" ");
    let n = parseInt(input[0],10);
    input = readline().replace(/(\r\n|\n|\r)/gm, "").split(" ");
    for(let i=0;i<n-1;i++){
        let temp = parseInt(input[i],10);
        adj[temp].push(i+2);
    }
    dfs(1,1,adj,noc);
    let v = [];
    for(let i=1;i<n+1;i++){
        if(prime[noc[i]-1]==true){
            v.push(i);
        }
    }

    print(v.length);
    print(v);
}


solve();







