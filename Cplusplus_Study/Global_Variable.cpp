#include <iostream>

using namespace std;

int age {24}; // Global Variable

int main(int argc, char *argv[]){
    int age {18}; // Local Variable
    cout << age << endl;
    return 0;
}
