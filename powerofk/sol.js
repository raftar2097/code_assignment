const { readline, print } = require('@ip-algorithmics/codeforces-io');


function solve(){
    var x = readline().replace(/(\r\n|\n|\r)/gm, "").split(' ');
    let t = parseInt(x[0],10);
    let p = parseInt(x[1],10);
    let query = [];
    while(t--){
        let n = readline().replace(/(\r\n|\n|\r)/gm, "");
        n = parseInt(n,10);
        query.push(n);
    }
    t = 0;
    let k = 1;
    let pre = [];
    let v = [];
    let sum = 0;
    if(p==1){
        v.push(1);
        pre.push(1);
    }else{
        while(k<=1000000000){
            v.push(k);sum+=k;pre.push(sum);
            k*=p;
        }
    }
    while(t<query.length){
        let n = query[t];
        let ans = (n*(n+1))/2;;
        let k = upper_bound(v,v.length,n);k--;
        ans-=(2*pre[k]);
        console.log(ans);
        t++;
    }
}

function upper_bound(arr,N,X)
{
    let mid;
    let low = 0;
    let high = N;
    while (low < high) {
        mid = low + Math.floor((high - low)/2);
        if (X >= arr[mid]) {
            low = mid + 1;
        }
        else {
            high = mid;
        }
    }
    if(low < N && arr[low] <= X) {
       low++;
    }
    return low;
}
solve();
