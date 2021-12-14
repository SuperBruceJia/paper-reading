#include <iostream>

using namespace std;

int main(int argc, char *argv[]) {
    
    int num1 {10};
    int num2 {20};
    
    num1 = num2;
    
    cout << "num1 is " << num1 << endl;
    cout << "num2 is " << num2 << endl;
    
    num2 = 200;
    
    cout << "num1 is " << num1 << endl;
    cout << "num2 is " << num2 << endl;
    
    cout << num1 << " + " << num2 << " = " << num2 + num1 << endl;
    
    int result {0};
    result = num1 + num2;
    cout << result << endl;
    
    result = num1 - num2;
    cout << result << endl;
    
    result = num1 * num2;
    cout << result << endl;
    
    result = num1 / num2;
    cout << result << endl;
    
    result = num2 / num1;
    cout << result << endl;
    
    num1 = 10;
    num2 = 3;
    result = num1 % num2;
    cout << result << endl;
    
    // PEMDAS
    // parentheses, exponents, multiplication,
    // division, addition, subtraction
    
    cout << 5 / 10 << endl;
    cout << 5.0 / 10.0 << endl;
    
    return 0;
    
}
