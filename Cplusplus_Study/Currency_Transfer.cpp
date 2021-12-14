#include <iostream>

using namespace std;

int main(int argc, char *argv[]) {
    
    int cents {0}, dollors {0}, quarters {0}, dimes {0}, nickels {0}, pennies {0};
    
    cout << "Enter an amount in cents: " << endl;
    cin >> cents;
    
    dollors = cents / 100;
    quarters = (cents - dollors * 100) / 25;
    dimes = (cents - dollors * 100 - quarters * 25) / 10;
    nickels = (cents - dollors * 100 - quarters * 25 - dimes * 10) / 5;
    pennies = cents - dollors * 100 - quarters * 25 - dimes * 10 - nickels * 5;
    
    cout << "dollors: " << dollors << endl;
    cout << "quarters: " << quarters << endl;
    cout << "dimes: " << dimes << endl;
    cout << "nickels: " << nickels << endl;
    cout << "pennies: " << pennies << endl;
    
    return 0;
    
}