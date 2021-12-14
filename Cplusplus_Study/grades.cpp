#include <iostream>

using namespace std;
int main(int argc, char *argv[]) {
    
    int scores {};
    
    cout << "Enter your score on the exam (0 - 100): " << endl;
    cin >> scores;
    
    char letter_grade {};
    if (scores >= 0 && scores <= 100){
        if (scores > 90){
            letter_grade = 'A';
        }
        else if (scores > 80) {
            letter_grade = 'B';
        }
        else if (scores > 70) {
            letter_grade = 'C';
        }
        else if (scores > 60) {
            letter_grade = 'D';
        }
        else {
            letter_grade = 'F';
        }
        cout << "Your grade is " << letter_grade << endl;
        
        if (letter_grade == 'F'){
            cout << "Sorry, you must repeat this class!" << endl;
        }
        else{
            cout << "Congratulations!" << endl;
        }
        
    } else {
        cout << "Sorry, " << scores << " is not in range!" << endl;
    }
}