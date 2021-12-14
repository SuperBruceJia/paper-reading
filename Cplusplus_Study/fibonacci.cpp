#include <iostream>

using namespace std;

unsigned long long fibonacci(unsigned long long n);

unsigned long long fibonacci(unsigned long long n){
    if (n <= 1){
        return n;
    }
    return  fibonacci(n - 1) + fibonacci(n - 2);
}

int main(int argc, char *argv[]) {
    
    cout << fibonacci(30000);
    return 0;
}