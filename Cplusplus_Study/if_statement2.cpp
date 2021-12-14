#include <iostream>

using namespace std;
int main(int argc, char *argv[]) {
    
    int num {};
    const int target {10};
    
    cout << "Enter a number and I'll compare it to " << target << endl;
    cin >> num;
    
    if (num > target){
        cout << num << " is greater than or equal to " << target << endl;
    } else {
        cout << num << " is less than " << target << endl;
    }
    
    return 0;
    
    
}