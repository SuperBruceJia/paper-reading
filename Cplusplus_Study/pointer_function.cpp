#include <iostream>

using namespace std;

void double_data(int *int_ptr);

void double_data(int *int_ptr){
    *int_ptr *= 2;
}

int main(int argc, char *argv[]) {
    int value {10};
    int *int_ptr {nullptr};
    
    cout << "Value: " << value << endl;
    double_data(&value);
    cout << "Value: " << value << endl;

    cout << "-------------------" << endl;
    int_ptr = &value;
    double_data(int_ptr);
    cout << "Value: " << value << endl;

    return 0;
}