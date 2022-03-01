#include<bits/stdc++.h>
using namespace std;
#define pb push_back
#define ff first
#define ss second
#define mp make_pair
#define IN insert
#define ALL(a) a.begin(),a.end()
typedef long long int ll;
ll mod = 1e9 + 7;
ll power(ll x, ll n) {
	ll res = 1;
	while (n) {
		if (n & 1) {
			res = res * x;
			res = res % mod;
		}
		x = x * x;
		x = x % mod;
		n = n / 2;
	}
	return res;
}
int main() {
	// ios::sync_with_stdio(0);cin.tie(0);cout.tie(0);
#ifndef ONLINE_JUDGE
	freopen("input8.txt", "r", stdin);
	freopen("output8.txt", "w", stdout);
#endif
	ll fact[100005];
	fact[0] = 1;
	for (int i = 1; i < 100005; i++) {
		fact[i] = (fact[i - 1] * i) % mod;
	}
	ll n; cin >> n;
	string s; cin >> s;
	ll k = 0;
	for (int i = 0; i < n; i++) {
		if (i + 1 < n && s[i] == 'x' && s[i + 1] == 'x') {
			k++;
			i++;
		}
	}
	ll k0 = 0;
	for (int i = 0; i < n; i++) {
		if (s[i] == '.') {
			k0++;
		}
	}
	ll ans = fact[k + k0];
	ll k1 = fact[k] * fact[k0];
	k1 = k1 % mod;
	ans = ans * power(k1, mod - 2);
	cout << ans % mod << endl;
}