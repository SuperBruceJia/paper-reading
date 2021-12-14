#include <iostream>

using namespace std;

int main(int argc, char *argv[]) {
    int counter {10};
    int result {0};
    
    cout << "Counter: " << counter << endl;
    
    counter = counter + 1;
    cout << "Counter: " << counter << endl;
    
    // Postfix num++
    counter++;
    cout << "Counter: " << counter << endl;
    
    // Prefix ++num
    ++counter;
    cout << "Counter: " << counter << endl << endl;
    
    counter = 10;
    result = 0;
    cout << "Counter: " << counter << endl;
    result = ++counter;
    cout << "Counter: " << counter << endl;
    cout << "result: " << result << endl << endl;
    
    counter = 10;
    result = 0;
    cout << "Counter: " << counter << endl;
    result = counter++;
    cout << "Counter: " << counter << endl;
    cout << "result: " << result << endl << endl;
    
    counter = 10;
    result = 0;
    cout << "Counter: " << counter << endl;
    result = ++counter + 10;
    cout << "Counter: " << counter << endl;
    cout << "result: " << result << endl << endl;
    
    counter = 10;
    result = 0;
    cout << "Counter: " << counter << endl;
    result = counter++ + 10;
    cout << "Counter: " << counter << endl;
    cout << "result: " << result << endl << endl;
    
    int total {};
    int num1 {}, num2 {}, num3 {};
    const int count {3};
    
    cout << "Enter 3 integers separated by spaces: " << endl;
    cin >> num1 >> num2 >> num3;
    total = num1 + num2 + num3;
    
    double average {0.0};
    average = static_cast<double>(total) / count;
    
    // Old style
//    average = (double)total / count;
    
    cout << "The 3 numbers were: " << num1 << ", " << num2 << ", " << num3 << endl;
    cout << "The sum of the numbers is " << total << endl;
    cout << "The average of the numbers are " << average << endl;
    
    return 0;
}