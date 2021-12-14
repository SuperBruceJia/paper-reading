#include <iostream>

using namespace std;
int main(int argc, char *argv[]) {
    bool equal_result {false};
    bool not_equal_result {false};
    
    // output true or false
    cout << boolalpha;
    
    int num1 {}, num2 {};
    
    cout << "Enter two integers separated by a space: " << endl;
    cin >> num1 >> num2;
    equal_result = (num1 == num2);
    not_equal_result = (num1 != num2);
    cout << "Comparision result (equals): " << equal_result << endl;
    cout << "Comparision result (not equals): " << not_equal_result << endl << endl;
    
    char char1 {}, char2 {};
    cout << "Enter two chars separated by a space: " << endl;
    cin >> char1 >> char2;
    equal_result = (char1 == char2);
    not_equal_result = (char1 != char2);
    cout << "Comparision result (equals): " << equal_result << endl;
    cout << "Comparision result (not equals): " << not_equal_result << endl << endl;
    
    double double1 {}, double2 {};
    cout << "Enter two doubles separated by a space: " << endl;
    cin >> double1 >> double2;
    equal_result = (double1 == double2);
    not_equal_result = (double1 != double2);
    cout << "Comparision result (equals): " << equal_result << endl;
    cout << "Comparision result (not equals): " << not_equal_result << endl << endl;
    
    cout << "Enter one integer and one double separated by a space: " << endl;
    cin >> num1 >> double2;
    equal_result = (num1 == double2);
    not_equal_result = (num1 != double2);
    cout << "Comparision result (equals): " << equal_result << endl;
    cout << "Comparision result (not equals): " << not_equal_result << endl << endl;
    
    return 0;
    
}