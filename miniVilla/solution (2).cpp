#include<bits/stdc++.h>
using namespace std;
typedef long long int ll;

#define t_case ll test;cin>>test;while(test--)
#define left(nod) 2*nod
#define right(nod) 2*nod+1
#define ss second
#define ff first
#define pb push_back
#define pll pair<ll,ll>
#define FAST ios::sync_with_stdio(0);cin.tie(0);cout.tie(0);
#define deb(a) cout<<#a<<": "<<a;cout<<endl;
#define deba(a...) cout<<endl;cout<<#a<<": ";for(auto it:a)cout<<it<<" ";cout<<endl;
#define all(a) a.begin(),a.end()

void solve()
{
	ll n,q;cin>>n>>q;
	
	vector <ll> top[51];
	
	ll ans[51];vector <ll> vis(51,0);
	
	vector <ll> curr;
	
	for(ll i=1;i<=n;i++)
	{
		ll a;cin>>a;
		
		if(vis[a]==0)
		{
			top[a]=curr;
			curr.pb(a);
			vis[a]=1;
			ans[a]=i;
		}
	}
	
	while(q--)
	{
		ll t;cin>>t;

        if(vis[t]==0)
        {
            cout<<-1<<" ";
            continue;
        }
		
		cout<<ans[t]<<" ";
		
		ans[t]=1;
		
		for(auto it:top[t])
		{
			top[it].pb(t);
			ans[it]++;
		}
		top[t].clear();
	}
		
		
	
}

int main()
{
	FAST;//not faster than scanf printf

    #ifndef	ONLINE_JUDGE
            freopen("input10.txt","r",stdin);
            freopen("output10.txt","w",stdout);
    #endif
    
    
	
	{
		solve();
	}
	
}
