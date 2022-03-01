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
    
  solve();
});

function readLine() {
  return inputString[currentLine++];
}


var mod = 1000000007;

function power(x,n){
    let res = 1;
    x = x%mod;
    if(x==0)
        return 0;
    while(n>0){
        if(n & 1){
            res = moduloMultiplication(res,x,mod);
        }
        x = moduloMultiplication(x,x,mod);
		n = n>>1;
    }
    return res;
}


function solve(){
    let fact = new Array(100005).fill(0);
    fact[0] = 1;
    for(let i=1;i<100005;i++){
        fact[i] = moduloMultiplication(fact[i - 1],i,mod);
    }
    let inp = readLine().split(" ");
    let n = parseInt(inp[0],10);
    inp = readline().split(" ");
    let s = inp[0];
    console.log(s);
    let k = 0;
    for(let i=0;i<n;i++){
        if ((i+1<n) && (s[i]=='x') && (s[i + 1]=='x')) {
			k++;
            i++;
		}
    }
    let k0 = 0;
    for(let i=0;i<n;i++){
        if (s[i] == '.') {
			k0++;
		}
    }
    let ans = fact[k+k0];
    let k1 = moduloMultiplication(fact[k],fact[k0],mod);
    k1 = k1 % mod;
    ans = ans* power(k1,mod-2);
    console.log(ans%mod);
}

function moduloMultiplication(a, b, mod)
{
    let res = 0; 
    a = (a % mod);
    while (b > 0)
    {
        if ((b & 1) > 0)
        {
            res = (res + a) % mod;
        }
        a = (2 * a) % mod;
        b = (b >> 1); // b = b / 2
    }
    return res;
}