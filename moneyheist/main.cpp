#include <bits/stdc++.h>

using namespace std;

typedef pair<int, int> pii;
typedef long long ll;

int main() {
    // ios_base::sync_with_stdio(0); cin.tie(NULL);

    #ifndef	ONLINE_JUDGE
            freopen("input10.txt","r",stdin);
            freopen("output10.txt","w",stdout);
    #endif
    
    

    int n, m, k;
    cin >> n >> k >> m;

    vector<pii> a(n);
    for(int i = 0; i < n; ++i) {
        cin >> a[i].first;
        a[i].second = i;
    }

    sort(a.begin(), a.end(), greater<pii>());

    vector<int> ind(m*k);
    ll sumBeauty = 0;
    for(int i = 0; i < m*k; ++i) {
        sumBeauty += a[i].first;
        ind[i] = a[i].second;
    }

    sort(ind.begin(), ind.end());

    vector<int> division(k-1);
    for(int i = 0; i < k-1; ++i)
        division[i] = ind[(i+1)*m - 1];

    cout << sumBeauty << endl;

    return 0;
}