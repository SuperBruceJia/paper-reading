#include <iostream>
#include <string>
#include <vector>

using namespace std;

void print(int);
void print(double);
void print(string);
void print(string, string);
void print(vector<string>);

void print(int num){
    cout << "Printing int: " << num << endl;
}

void print(double num){
    cout << "Printing double: " << num << endl;
}

void print(string s){
    cout << "Printing string: " << s << endl;
}

void print(string s1, string s2){
    cout << "Printing two strings: " << s1 << " and " << s2 << endl;
}

void print(vector<string> v){
    cout << "Printing vector of strings: \n";
    for (auto s : v){
        cout << s + " ";
    }
    cout << endl;
}


int main(int argc, char *argv[]) {
    print(100);
    print('A');
    print(123.5);
    print(123.3F);
    print("C-style String");
    
    string s {"C++ String"};
    print(s);
    print("C-style String", s);
    
    vector<string> three_stooges {"Bruce", "Shuyue", "JIA"};
    print(three_stooges);
    
    return 0;
}