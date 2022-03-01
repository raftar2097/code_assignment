# include <bits/stdc++.h>
//# include <ext/pb_ds/assoc_container.hpp>
//# include <ext/pb_ds/tree_policy.hpp>
# define ull unsigned long long
# define ll long long
# define double long double
# define pll pair<ll,ll>
# define pb push_back
# define pf push_front
# define fi first
# define se second
# define mp make_pair
# define max3(a,b,c) max(a,max(b,c))
# define min3(a,b,c) min(a,min(b,c))
# define all(x) x.begin(),x.end()
# define fill(a,b) memset(a,b,sizeof(a))
# define gcd(m,n)  __gcd(m, n)
# define read(a,s,n) for(ll i = s; i<=n;i++) cin>>a[i]
# define pr_double(x) cout << fixed << setprecision(15) << x
# define PI 3.1415926535897932384626
# define endl '\n'


//using namespace __gnu_pbds;
using namespace std;

//template<typename T>
//using pbds = tree<T, null_type, less<T>, rb_tree_tag, tree_order_statistics_node_update>;

void __print(int x) {cerr << x;}
void __print(long x) {cerr << x;}
void __print(long long x) {cerr << x;}
void __print(unsigned x) {cerr << x;}
void __print(unsigned long x) {cerr << x;}
void __print(unsigned long long x) {cerr << x;}
void __print(float x) {cerr << x;}
void __print(double x) {cerr << x;}
void __print(char x) {cerr << '\'' << x << '\'';}
void __print(const char *x) {cerr << '\"' << x << '\"';}
void __print(const string &x) {cerr << '\"' << x << '\"';}
void __print(bool x) {cerr << (x ? "true" : "false");}

template<typename T, typename V>
void __print(const pair<T, V> &x) {cerr << '{'; __print(x.first); cerr << ','; __print(x.second); cerr << '}';}
template<typename T>
void __print(const T &x) {int f = 0; cerr << '{'; for (auto &i : x) cerr << (f++ ? "," : ""), __print(i); cerr << "}";}
void _print() {cerr << "]\n";}
template <typename T, typename... V>
void _print(T t, V... v) {__print(t); if (sizeof...(v)) cerr << ", "; _print(v...);}

#define debug(x...) cerr << "[" << #x << "] = ["; _print(x)

struct custom_hash {
    static uint64_t splitmix64(uint64_t x) {
        x += 0x9e3779b97f4a7c15;
        x = (x ^ (x >> 30)) * 0xbf58476d1ce4e5b9;
        x = (x ^ (x >> 27)) * 0x94d049bb133111eb;
        return x ^ (x >> 31);
    }

    size_t operator()(uint64_t x) const {
        static const uint64_t FIXED_RANDOM = std::chrono::steady_clock::now().time_since_epoch().count();
        return splitmix64(x + FIXED_RANDOM);
    }
};

const ll INF = 9223372036854775807;
const ll N = 500005;
const ll mod = 998244353; //998244353; //67280421310721
const ll M = 22;

int main() {
  ios_base::sync_with_stdio(false);
  cin.tie(NULL);
  //freopen("input8.txt","r",stdin);
  //freopen("output8.txt","w",stdout);
  ll t; cin>>t; ll p; cin>>p; ll k=1; vector<ll> v,pre; ll sum=0;
  if(p==1)
  {
      v.pb(1); pre.pb(1);
  }
  else{
    while(k<=1e9)
    {
        v.pb(k); sum+=k; pre.pb(sum);
        k*=p;
    }
  }
    while(t--)
    {
        ll n; cin>>n;
        ll ans = (n*(n+1))/2;
        ll k = upper_bound(all(v),n)-v.begin(); k--;
        ans-=(2*pre[k]);
        cout<<ans<<endl;
    }
}
