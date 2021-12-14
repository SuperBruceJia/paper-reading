#include <iostream>

using namespace std;
int main(int argc, char *argv[]) {
    int scores [] {100, 95, 89, 68, -1};
    int *score_ptr {scores};
    
    while (*score_ptr != -1){
        cout << *score_ptr << endl;
        score_ptr++;
    }
    
    cout << "---------------------" << endl;
    score_ptr = scores;
    cout << score_ptr << endl;
    while (*score_ptr != -1){
        cout << *score_ptr++ << endl;
    }
    
    return 0;
}
