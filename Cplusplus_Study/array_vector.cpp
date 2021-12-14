#include <iostream>

using namespace std;

int main(int argc, char *argv[]) {
    char vowels [] {'a', 'e','i', 'w', 'r'};
    
    cout << "The first vowels is " << vowels[0] << endl;
    cout << "The last vowels is " << vowels[4] << endl;
    
    double hi_temps [] {90.1, 89.7, 77.5, 81.6};
    cout << "The first high temperature is " << hi_temps[0] << endl;
    
    hi_temps[0] = 100.7;
    for (int i=0; i<=3; i++)
        cout << hi_temps[i] << endl;
    
    int test_score [] {};
    cout << "Input 5 test scores: " << endl;
    cin >> test_score[0];
    cin >> test_score[1];
    cin >> test_score[2];
    cin >> test_score[3];
    cin >> test_score[4];
    
    cout << "First score at index 0 is " << test_score[0] << endl;
    cout << "Second score at index 1 is " << test_score[1] << endl;
    cout << "Third score at index 2 is " << test_score[2] << endl;
    cout << "Fourth score at index 3 is " << test_score[3] << endl;
    cout << "Fifth score at index 4 is " << test_score[4] << endl;
    
    cout << test_score << endl;
    
    return 0;
}
