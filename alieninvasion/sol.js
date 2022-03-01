
process.stdin.resume();
process.stdin.setEncoding('utf8');

let inputString = "";
let currentLine = 0;

process.stdin.on("data", (inputStdin) => {
  inputString += inputStdin;
});

process.stdin.on("end", (_) => {
  console.log(inputString);
  inputString = inputString
    .trim()
    .split("\n")
    .map((string) => {
      return string.trim();
    });
    
  main();
});

function readLine() {
  return inputString[currentLine++];
}

function trial(t,a,n,p,q){
    let ans = 0;
    for(let i=1;i<=n;i++){
        let w = a[i]-p*t;
        w = Math.max(w,0);
        ans+=Math.floor((w+q-p-1)/(q-p))
    }
    return ans<=t?1:0;
}

function solve(){
    let inp = readLine().split(" ").map((x) => parseInt(x));
    let n = parseInt(inp[0],10);
    let a = new Array(n+1);
    inp = readLine().split(" ").map((x) => parseInt(x));
    for(let i=1;i<=n;i++){
        a[i] = parseInt(inp[i-1],10);
    }
    inp = readLine().split(" ").map((x) => parseInt(x));
    let q,p;
    q = parseInt(inp[0],10);
    p = parseInt(inp[1],10);
    inp = readLine().split(" ").map((x) => parseInt(x));
    h = parseInt(inp[0],10);
    d = parseInt(inp[1],10);
    let s = 0;
    let e = 1000000009;
    while(s!=e){
        let m = Math.floor((s+e)/2);
        if(trial(m,a,n,p,q)==1){
            e = m;
        }else{
            s = m+1;
        }
    }
    if(h > d*s){
        console.log(s);
    }
    else{
        console.log(-1);
    }
}


function main(){
    let inp = readLine().split(" ").map((x) => parseInt(x));
    let test = parseInt(inp[0],10);
    for(let i=0;i<test;i++){
        solve();
    }
}

