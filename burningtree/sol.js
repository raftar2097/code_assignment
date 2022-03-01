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
    main();
});

function readLine() {
  return inputString[currentLine++];
}



function dfs(root,par,edge,depth,up,Size){
    edge[root].forEach(child => {
        if(child!=par){
            depth[child] = depth[root]+1;
            up[child][0] = root;
            for(let j=1;j<20;j++){
                up[child][j] = up[up[child][j - 1]][j - 1];
            }
            dfs(child,root,edge,depth,up,Size);
            Size[root]+=Size[child];
        }
    });
}

function getLca(a,b,depth,up){
    if(depth[a]<depth[b]){
        let temp = a;
        a = b;
        b = temp;
    }
    let k = depth[a]-depth[b];
    for(let i=19;i>=0;i--){
        if(k&(1<<i))
            a = up[a][i];
    }
    if(a==b)
        return a;
    for(let i=19; i>=0; i--)
    {
        if(up[a][i]!=up[b][i])
        {
            a=up[a][i];
            b=up[b][i];
        }
    }
    return up[a][0];
}
function solve(){
    let inp = readLine().split(" ").map((x) => parseInt(x));
    let n,q;
    n = inp[0];
    q = inp[1];
    let edge = new Array(n+1);
    let Size = new Array(n+1).fill(1);
    let depth = new Array(n+1).fill(0);
    let up = new Array(n+2);
    for(let i=0;i<n+1;i++){
        edge[i] = [];
    }
    for(let i=0;i<n+2;i++){
        up[i] = new Array(20).fill(0);
    }
    for(let i=1;i<n;i++){
        inp = readLine().split(" ").map((x) => parseInt(x));
        let x = inp[0];
        let y = inp[1];
        edge[x].push(y);
        edge[y].push(x);
    }
    dfs(1,0,edge,depth,up,Size);
    for(let i=0;i<q;i++){
        inp = readLine().split(" ").map((x) => parseInt(x));
        let x = inp[0];
        let y = inp[1];
        let lca = getLca(x,y,depth,up);
        console.log(Size[lca]);
    }
}

function main(){
    let inp = readLine().split(" ").map((x) => parseInt(x));
    let t = inp[0];
    for(let i=0;i<t;i++){
        solve();
    }
}
