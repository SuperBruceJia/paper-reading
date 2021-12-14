#include <iostream>

using namespace std;

int main(int argc, char *argv[]) {
    
    const double usd_per_eur {1.1543};
    double euros {0.0};
    double dollars {0.0};
    
    cout << "Welcome to the EUR to USD converter! " << endl;
    cout << "Enter the value in EUR: " << endl;
    cin >> euros;
    dollars = euros * usd_per_eur;
    
    cout << euros << " euros is equivalent to " << dollars << " dollars! " << endl;
    
    
    return 0;
}
