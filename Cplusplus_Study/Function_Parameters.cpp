#include <iostream>
#include <string>
#include <vector>

using namespace std;

void pass_by_value1(int num);
void pass_by_value2(string s);
void pass_by_value3(vector<string> v);
void print_vector(vector<string> v);

void pass_by_value1(int num){
    num = 1000;
}

void pass_by_value2(string s){
    s = "Changed";
}

void pass_by_value3(vector<string> v) {
    v.clear();
}

void print_vector(vector<string> v) {
    for (auto s : v){
        cout << s << " ";
    }
    cout << endl;
}

int main(int argc, char *argv[]) {
    int num {10};
    int another_num {20};
    
    cout << "num before calling pass_by_value1: " << num << endl;
    pass_by_value1(num);
    cout << "num after calling pass_by_value1: " << num << endl << endl;
    
    cout << "another_num before calling pass_by_value1: " << another_num << endl;
    pass_by_value1(another_num);
    cout << "another_num after calling pass_by_value1: " << another_num << endl << endl;
    
    string name {"Bruce"};
    cout << "name before calling pass_by_value2: " << name << endl;
    pass_by_value2(name);
    cout << "name after calling pass_by_value2: " << name << endl << endl;
    
    vector<string> stooges {"Larry", "Moe", "Curly"};
    cout << "Stooges before calling pass_by_value3: " << endl;
    print_vector(stooges);
    pass_by_value3(stooges);
    cout << "Stooges before calling pass_by_value3: " << endl;
    print_vector(stooges);
    
    return 0;
    
}