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

function solve(){
    var x = readLine().split(" ").map((x) => parseInt(x));
    let t = parseInt(x[0],10);
    let p = parseInt(x[1],10);
    let query = [];
    while(t--){
        let inp = readLine().split(" ").map((x) => parseInt(x));
        let n = parseInt(inp[0],10);
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

