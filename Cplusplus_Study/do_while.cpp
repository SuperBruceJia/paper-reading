#include <iostream>

using namespace std;

int main(int argc, char *argv[]) {
    char selection {};
    
    do {
        cout << "\n1. Do this!" << endl;
        cout << "2. Do that!" << endl;
        cout << "3. Do something else!" << endl;
        cout << "Q. Quit!" << endl;
        
        cout << "Enter your selection!" << endl;
        cin >> selection;
        
        if (selection == '1'){
            cout << "You choose 1 - doing this" << endl;
        }
        else if (selection == '2'){
            cout << "You choose 2 - doing that" << endl;
        }
        else if (selection == '3'){
            cout << "You choose 2 - doing something else" << endl;
        }
        else if (selection == 'Q' || selection == 'q'){
            cout << "Goodbye!" << endl;
        }
        else {
            cout << "Unknown option! Try again!" << endl;
        }
        
    } while (selection != 'q' && selection != 'Q');
    return 0;
}