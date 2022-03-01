#include<bits/stdc++.h>
using namespace std;
#define fastIO ios_base::sync_with_stdio(false);cin.tie(NULL);cout.tie(NULL);
#define int long long int
#define fi first
#define se second
#define pub push_back
#define mkp make_pair
#define pi pair<int,int>
#define all(v) (v).begin(), (v).end()
#define rep(i, l, r) for(int i=(int)(l);i<(int)(r);i++)
#define repd(i, l, r) for (int i=(int)(l);i>=(int)(r);i--)
int power(int x, unsigned int y){int res = 1;while (y > 0){ if (y & 1){res = res*x;} y = y>>1;x = x*x;}return res;}
#define elif else if
int powermod(int x, unsigned int y, int p) {int res = 1;x = x % p;while (y > 0) {if (y & 1) { res = (res * x) % p; }y = y >> 1;x = (x * x) % p;}return res;}
#define print2d(mat,n,m){for(int i=0;i<(int)(n);i++){for(int j=0;j<(m);j++){cout<<mat[i][j]<<" ";}cout<<endl;}}
#define print1d(mat,n){for(int i=0;i<(int)(n);i++)cout<<mat[i]<<" ";cout<<endl;}
#define clr(a,x) memset(a,x,sizeof(a))
#define rr(v) for(auto &val:v)
#define printpair(v) for(auto val: v){cout<<val.fi<<":"<<val.se<<", ";}cout<<endl;
#define print(v) for (const auto itr : v){cout<<itr<<' ';}cout<<endl;
#define init(v,x) for (auto &itr:v){itr=x;}
#define ln length()
int ceel(int p,int q){return (p/q)+(p%q!=0); }
const int mod = 1e9+7;
#define sz size()
const int inf = 1e18;
const int mod1 = 998244353;
vector<int> adj[200005];
vector<int> noc(200005);
vector<bool> prime(200010,true);
void dfs(int node,int par){
    noc[node]=1;
    rr(adj[node]){
        if (val!=par){
            dfs(val,node);
            noc[node]+=noc[val];
        }
    }
}
void solve(){
    prime[0]=false;
    prime[1]=false;
    rep(i,2,200005){
        if(prime[i]){
            for(int j=i+i;j<200005;j+=i){
                prime[j]=false;
            }
        }
    }
    int n,temp;
    cin>>n;
    rep(i,0,n-1){
        cin>>temp;
        adj[temp].pub(i+2);
    }
    dfs(1,1);
    vector<int> v;
    rep(i,1,n+1){
        if(prime[noc[i]-1]){
            v.pub(i);
        }
    }
    cout<<v.sz<<endl;
    print(v)




}
int32_t main(){
    fastIO

    int t=1;

//    cin>>t;
    rep(i,0,t){
//        cout<<"Case #"<<i+1<<": ";
        solve();
    }
    return 0;
}