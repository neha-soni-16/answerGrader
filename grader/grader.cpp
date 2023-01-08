#include <bits/stdc++.h>
using namespace std;


int editDistance(string &a, string &b, int n, int m, int i, int j,vector<vector<int>>&dp){

    if(i==n)return m-j;
    if(j==m)return n-i;

    if(dp[i][j]!=-1)return dp[i][j];

    if(a[i]==b[j]){
        return dp[i][j] = editDistance(a,b,n,m,i+1,j+1,dp);
    }
    else {

        int x = editDistance(a,b,n,m,i+1,j+1,dp);
        int y = editDistance(a,b,n,m,i+1,j,dp);
        int z = editDistance(a,b,n,m,i,j+1,dp);

        return dp[i][j] =  1+min({x,y,z});
    }



}

int main(){

    string ans = "डॉ राजेन्द्र प्रसाद";

    vector<string> recAns = {"डॉक्टर राजेन्द्र प्रसाद","राजेन्द्र प्रसाद","डॉ सर्वपल्ली राधाकृष्णन",
    "रजेन्द्र प्रसाद","डॉ ए. पी. जे. अब्दुल कलाम",
    "अब्दुल कलाम","प्रणब मुखर्जी","राम नाथ कोविंद","के. आर. नारायणन","डॉक्टर प्रसाद"};

    // sorting

    sort(recAns.begin(),recAns.end());

    set<int>range;

    int n = ans.size();

    int j = n/5;

    for(int i=j;i<n;i=i+j){
        range.insert(i);
    }

    map<int,vector<string>>mp;

    for(int i=0;i<recAns.size();i++){

        vector<vector<int>>dp(1001,vector<int>(1001,-1));

        int e = editDistance(ans,recAns[i],n,recAns[i].size(),0,0,dp);

        auto it= lower_bound(range.begin(),range.end(),e);



        if(it==range.end()){

            mp[INT_MAX].push_back(recAns[i]);

        } else{

            mp[*it].push_back(recAns[i]);

        }


    }


    

    for(auto i:mp){
        cout<<i.first<<": ";

        for(auto j:i.second){
            cout<<j<<", ";
        }
        cout<<endl;

    }


}