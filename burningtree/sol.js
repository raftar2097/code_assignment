const { readline, print } = require('@ip-algorithmics/codeforces-io');


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
    let inp = readline().replace(/(\r\n|\n|\r)/gm, "").split(' ');
    let n,q;
    n = parseInt(inp[0],10);
    q = parseInt(inp[1],10);
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
        inp = readline().replace(/(\r\n|\n|\r)/gm, "").split(' ');
        let x = parseInt(inp[0],10);
        let y = parseInt(inp[1],10);
        edge[x].push(y);
        edge[y].push(x);
    }
    dfs(1,0,edge,depth,up,Size);
    for(let i=0;i<q;i++){
        inp = readline().replace(/(\r\n|\n|\r)/gm, "").split(' ');
        let x = parseInt(inp[0],10);
        let y = parseInt(inp[1],10);
        let lca = getLca(x,y,depth,up);
        print(Size[lca]);
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