#include <iostream>
#include <cmath>

using namespace std;

int main(int argc, char *argv[]) {
    double num {};
    
    cout << "Enter a number (double): ";
    cin >> num;
    
    cout << "The sqrt of " << num << " is " << sqrt(num) << endl;
    cout << "The cubed root of " << num << " is " << cbrt(num) << endl;
    
    cout << "The sine of " << num << " is " << sin(num) << endl;
    cout << "The cosine of " << num << " is " << cos(num) << endl;
    
    cout << "The ceil of " << num << " is " << ceil(num) << endl;
    cout << "The floor of " << num << " is " << floor(num) << endl;
    cout << "The round of " << num << " is " << round(num) << endl;
    
    double power {};
    cout << "\n Enter a power to raise " << num << " to ";
    cin >> power;
    cout << num << " raised to the " << power << " power is: " << pow(num, power) << endl;
    
    return 0;
}