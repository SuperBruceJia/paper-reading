#include <iostream>

using namespace std;

int main(int argc, char *argv[]) {
    
    int num {};
    const int min {10};
    const int max {100};
    
    cout << "Enter a number between " << min << " and " << max << endl;
    cin >> num;
    
    if (num >= min){
        cout << "\n ===================== If statement 1 ===================== " << endl;
        cout << num << " is greater than " << min << endl;
        
        int diff {num - min};
        cout << num << " is " << diff << " greater than " << min << endl << endl;
    }
    
    if (num <= max){
        cout << "\n ===================== If statement 2 ===================== " << endl;
        cout << num << " is less than " << max << endl;
        
        int diff {max - num};
        cout << num << " is " << diff << " less than " << max << endl << endl;
    }
    
    if (num >= min && num <= max){
        cout << "\n ===================== If statement 3 ===================== " << endl;
        cout << num << " is in range " << endl;
        cout << "This means statements 1 and 2 must also display!" << endl;
        
    }
    else {
        cout << num << " is not in range!" << endl;
    }
    
    
    return 0;
}