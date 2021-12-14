#include <iostream>

using namespace std;

int main(int argc, char *argv[]) {
    int scores [] {100, 95, 89};
    cout << "Value of scores: " << scores << endl;
    
    int *score_ptr {scores};
    cout << "Value of score_ptr: " << score_ptr << endl;
    
    // Pointer Subscript Notation: score_ptr[0]
    // Pointer offset notation: *(score_ptr + 1)
    for (int i {0}; i < size(scores); i++){
        cout << scores[i] << endl;
        cout << (score_ptr + i) << endl;
    }
    
    return 0;
}