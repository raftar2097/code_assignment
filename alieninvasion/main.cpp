#include <bits/stdc++.h>
using namespace std;
#define int long long
#define quickread                     \
    ios_base::sync_with_stdio(false); \
    cin.tie(NULL);                    \
    cout.tie(NULL);
#define pb push_back
#define all(x) x.begin(), x.end()
#define hii cout << "Hii there Sparky! \n"
#define endl '\n'
#define mod 1000000007
//#define mod 998244353
#define maxn 100010  // check the limits, dummy

int n, q, p, h, d;
int trial(int t, int a[]) {
    int ans = 0;
    for (int i = 1; i <= n; i++) {
        int w = a[i] - 1ll * p * t;
        w = max(w, 0ll);
        ans += (w + q - p - 1) / (q - p);
    }
    return ans <= t;
}

void solve() {
    cin >> n;
    int a[n];
    assert(n > 0 && n <= 1e5);
    for (int i = 1; i <= n; i++) {
        cin >> a[i];
    }
    cin >> q >> p;
    cin >> h >> d;
    assert(q > p && h > d);
    int s = 0, e = 1e9;
    while (s != e) {
        int m = (s + e) / 2LL;
        if (trial(m, a))
            e = m;
        else
            s = m + 1;
    }
    if (h > d * s)
        cout << s;
    else {
        cout << -1;
    }
}

int32_t main() {
    quickread;
    int test = 1;
    cin >> test;
    for (int i = 0; i < test; i++) {
        solve();
        if (i < test - 1) {
            cout << endl;
        }
    }
    return 0;
}