#include <iostream>
#include "Account.h"

using namespace std;

int main(int argc, char *argv[]) {
    Account bruce_account;
    bruce_account.set_name("Bruce's account");
    bruce_account.set_balance(1000.0);
    
    if (bruce_account.deposit(200.0)){
        cout << "Deposit OK" << endl;
    } else {
        cout << "Deposit Not allowed" << endl;
    }
    
    if (bruce_account.withdraw(500.0)){
        cout << "Withdrawal OK" << endl;
    } else {
        cout << "Not sufficient funds" << endl;
    }
    
    if (bruce_account.withdraw(1500.0)){
        cout << "Withdraw OK" << endl;
    } else {
        cout << "Not sufficient funds" << endl;
    }
    
    return 0;
}