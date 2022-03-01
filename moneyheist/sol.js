const { readline, print } = require('@ip-algorithmics/codeforces-io');


function compare(a,b){
    if(a.first>b.first)
        return -1;
    else if(a.first==b.first){
        if(a.second>b.second)
            return -1;
        else if(a.second==b.second)
            return 0;
        else
            return 1;
    }
    else
        return 1;
}

function solve(){
    let input = readline().replace(/(\r\n|\n|\r)/gm, "").split(" ");
    let n,m,k;
    n = parseInt(input[0],10);
    m = parseInt(input[1],10);
    k = parseInt(input[2],10);
    let a = new Array(n);
    input = readline().replace(/(\r\n|\n|\r)/gm, "").split(" ");
    for(let i=0;i<n;i++){
          let obj = {};
          obj.first = parseInt(input[i],10);
          obj.second = parseInt(i);  
          a[i] = obj;
    }
    a.sort(compare);
    let ind = new Array(m*k).fill(0);
    let sumBeauty = 0;
    for(let i=0;i<m*k;i++){
        sumBeauty+=a[i].first;
        ind[i] = a[i].second;
    }
    print(sumBeauty);
}

solve();