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
    let input = readLine().split(" ").map((x) => parseInt(x));
    let n,m,k;
    n = parseInt(input[0],10);
    m = parseInt(input[1],10);
    k = parseInt(input[2],10);
    let a = new Array(n);
    input = readLine().split(" ").map((x) => parseInt(x));
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
    console.log(sumBeauty);
}

