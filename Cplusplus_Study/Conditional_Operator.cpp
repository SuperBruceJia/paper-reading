#include <iostream>

using namespace std;
int main(int argc, char *argv[]) {
    int num {};
    
    cout << "Enter an integer: " << endl;
    cin >> num;
    
    if (num % 2 == 0){
        cout << num << " is even" << endl;
    }
    else{
        cout << num << " is odd" << endl;
    }
    
    cout << num << " is " << ((num % 2 == 0) ? "even" : "odd") << endl;
    
    int num1 {}, num2 {};
    cout << "Enter two integers separated by a space: " << endl;
    cin >> num1 >> num2;
    cout << ((num1 > num2) ? num1 : num2);
    
    return 0;
}