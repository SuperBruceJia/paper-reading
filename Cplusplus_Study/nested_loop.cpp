#include <iostream>
#include <time.h>

using namespace std;

int main(int argc, char *argv[]) {
    clock_t start, end;
    
    start = clock();
    for (int num1 {1}; num1 <= 10; ++num1){
        for (int num2 {2}; num2 <=10; ++num2){
            cout << num1 << " * " << num2 << " = " << num1 * num2 << endl;
        }
        cout << "----------------" << endl;
    }
    end = clock();
    cout << "Time elapsed: " << static_cast<double>((end - start) / CLOCKS_PER_SEC) << endl; 
    
    return 0;
}
