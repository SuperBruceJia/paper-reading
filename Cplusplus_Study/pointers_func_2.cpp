#include <iostream>
#include <string>
#include <vector>

using namespace std;

void display(const vector<string> *const v);
void display(int *array, int sentinel);

void display(const vector<string> *const v){
//    (*v).at(0) = "Funny";
    for (auto str : *v){
        cout << str << " ";
    }
    cout << endl;
//    (*v).at(0) = "Funny";
}

void display(int *array, int sentinel){
    while (*array != sentinel){
        cout << *array++ << " " << array++ << endl;
    }
    cout << endl;
}

int main(int argc, char *argv[]) {
//    vector<string> stooges {"Bruce", "Shuyue", "JIA"};
//    display(&stooges);
    
    int scores [] {100, 98, 97, 79, 56, 85, -1};
    display(scores, -1);
    
    return 0;
}
