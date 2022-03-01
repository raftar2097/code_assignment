const { readline, print } = require('@ip-algorithmics/codeforces-io');

function solve(){
    let x = readline().replace(/(\r\n|\n|\r)/gm, "").split(' ');
    let n = parseInt(x[0],10);
    let q = parseInt(x[1],10);
    let top = new Array(8);
    let ans = new Array(51);
    let vis = new Array(51).fill(0);
    let curr = [];
    x = readline().replace(/(\r\n|\n|\r)/gm, "").split(' ');
    for(let i=1;i<=n;i++){
        let a = parseInt(x[i-1],10);
        if(vis[a]===0)
		{
			top[a]=[...curr];
            print(top[a]);
			curr.push(a);
			vis[a]=1;
			ans[a]=i;
		}
    }
    x = readline().replace(/(\r\n|\n|\r)/gm, "").split(' ');
    i = 0;
    while(q--){
        let t = parseInt(x[i],10);
        i++;
        if(vis[t]==0){
            print(-1);
            continue;
        }
        print(ans[t]);
        ans[t]=1;
        top[t].forEach((it)=>{
            top[it].push(t);
            ans[it]++;
        })
        top[t] = [];
    }
}

solve();