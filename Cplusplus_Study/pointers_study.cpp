#include <iostream>
#include <string>
#include <vector>

using namespace std;

int main(int argc, char *argv[]) {
//    int *p;
//    cout << "Value of p is: " << p << endl;
//    cout << "Address of p is: " << &p << endl;
//    cout << "Sizeof of p is " << sizeof(p) << endl;
//    
//    p = nullptr;
//    cout << "Value of p is: " << p << endl;
    
//    int num {10};
//    cout << "Value of num is: " << num << endl;
//    cout << "Size of num is: " << sizeof num << endl;
//    cout << "Address of num is: " << &num << endl << endl;
//    
//    int *p;
//    cout << "Value of p is: " << p << endl;
//    cout << "Size of p is: " << sizeof p << endl;
//    cout << "Address of p is: " << &p << endl << endl;
//    
//    int *p1 {nullptr};
//    double *p2 {nullptr};
//    unsigned long long *p3 {nullptr};
//    vector<string> *p4 {nullptr};
//    string *p5 {nullptr};
//    
//    cout << "Sizeof p1 is: " << sizeof(p1) << endl;
//    cout << "Sizeof p2 is: " << sizeof(p2) << endl;
//    cout << "Sizeof p3 is: " << sizeof(p3) << endl;
//    cout << "Sizeof p4 is: " << sizeof(p4) << endl;
//    cout << "Sizeof p5 is: " << sizeof(p5) << endl;
//    
//    int score {10};
//    double high_temp {36.5};
//    
//    int *score_ptr {nullptr};
//    score_ptr = &score;
//    cout << "Value of score is: " << score << endl;
//    cout << "Address of score is: " << &score << endl;
//    cout << "Value of score_ptr is: " << score_ptr << endl << endl;
    
//    int score {100};
//    int *score_ptr {&score};
//    cout << score_ptr << endl;
//    cout << *score_ptr << endl;
    
//    *score_ptr = 200;
//    cout << *score_ptr << endl;
//    cout << score << endl;
    
    string name {"Frank"};
    string *string_ptr {&name};
    cout << string_ptr << "\t" << *string_ptr << endl;
    
    vector<string> stooges {"Bruce", "Shuyue", "Jia"};
    vector<string> *vector_ptr {nullptr};
    vector_ptr = &stooges;
    cout << "First stooges: " << (*vector_ptr).at(0) << endl;
    cout << "Stooges: ";
    for (auto stooge : *vector_ptr){
        cout << stooge << " ";
    }
    cout << endl;
    
    
    
    return 0;
}