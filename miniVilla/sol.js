process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here
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


function solve(){
    let x = readLine().split(" ").map((x) => parseInt(x));
    let n = parseInt(x[0],10);
    let q = parseInt(x[1],10);
    let top = new Array(8);
    let ans = new Array(51);
    let vis = new Array(51).fill(0);
    let curr = [];
    x = readLine().split(" ").map((x) => parseInt(x));
    for(let i=1;i<=n;i++){
        let a = parseInt(x[i-1],10);
        if(vis[a]===0)
		{
			top[a]=[...curr];
			curr.push(a);
			vis[a]=1;
			ans[a]=i;
		}
    }
    x = readLine().split(" ").map((x) => parseInt(x));
    i = 0;
    while(q--){
        let t = parseInt(x[i],10);
        i++;
        if(vis[t]==0){
            console,log(-1);
            continue;
        }
        console.log(ans[t]);
        ans[t]=1;
        top[t].forEach((it)=>{
            top[it].push(t);
            ans[it]++;
        })
        top[t] = [];
    }
}
