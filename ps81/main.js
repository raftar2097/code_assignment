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
 
 
function solve(){
    let inp = readLine().split(" ").map((x) => parseInt(x));
    let x = parseInt(inp[0],10);
    let k = parseInt(inp[1],10);
    let d = parseInt(inp[2],10);
    x = Math.abs(x);
    if(Math.floor(x/d)>k)
        console.log(x-k*d);
    else{
        let y = x%d;
        let tt = Math.floor(x/d);
        if((k-tt)%2==1)
            y = Math.abs(d-y);
        console.log(y);
    }
}
 
 
 
 
function main(){
    let inp = readLine().split(" ").map((x) => parseInt(x));
    let t = inp[0];
    for(let i=0;i<t;i++){
        solve();
    }
}
