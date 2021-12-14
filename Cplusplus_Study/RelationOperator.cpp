#include <iostream>

using namespace std;
int main(int argc, char *argv[]) {
    
    int num1 {}, num2 {};
    cout << boolalpha;
    
    cout << "Enter 2 integers separated by a space: " << endl;
    cin >> num1 >> num2;
    
    cout << num1 << " > " << num2 << " : " << (num1 > num2) << endl;
    cout << num1 << " >= " << num2 << " : " << (num1 >= num2) << endl;
    cout << num1 << " < " << num2 << " : " << (num1 < num2) << endl;
    cout << num1 << " <= " << num2 << " : " << (num1 <= num2) << endl;
    
    return 0;
}