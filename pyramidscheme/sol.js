process.stdin.resume();
process.stdin.setEncoding('utf8');

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });
    solve();
});

function readLine() {
  return inputString[currentLine++];
}



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
    let input = readLine().split(" ").map((x) => parseInt(x));
    let n = parseInt(input[0],10);
    input = readLine().split(" ").map((x) => parseInt(x));
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

    console.log(v.length);
    console.log(v);
}









