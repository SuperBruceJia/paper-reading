#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

int main(int argc, char *argv[]) {
    string s0;
    string s1 {"Apple"};
    string s2 {"Banana"};
    string s3 {"Kiwi"};
    string s4 {"apple"};
    string s5 {s1};
    string s6 {s1, 0, 3};
    string s7 {10, 'X'};
    
    cout << s0 << endl;
    cout << s1.length() << endl;
    
    // Assignmnet 
    s1 = "Bruce";
    s2 = s1;
    s3 = "Frank";
    s3[0] = 'C';
    s3.at(0) = 'P';
    
    // Concatenation
    s3 = "Bruce";
    s3 = s5 + " and " + s2 + " juice";
    
//    s4 = "hello " + "world"; // Compile Error
    
    // for loop
    for (size_t i {0}; i < s1.length(); ++i){
        cout << s1.at(i);
    }
    cout << endl;
    
    for (char c : s1){
        cout << c;
    }
    cout << endl;
    
    // Substring
    s1 = "This is a test!";
    cout << s1.substr(0, 4);
    cout << s1.substr(5, 2); // Start at 5 and output following 2 strs
    cout << s1.substr(10, 4);
    
    // Erase
    s1 = "This is a test!";
    s1.erase(0, 5);
    
    // getline
    string full_name {};
    cout << "Enter your full name" << endl;
    getline(cin, full_name);
    cout << "Your full name" << full_name << endl;
    
    // Find
    s1 = "This is a test!";
    string word = "Th";
    size_t position = s1.find(word);
    if (position != string::npos){
        cout << "Found " << word << " at position: " << position << endl;
    } else {
        cout << "Sorry, " << word << " not found " << endl;
    }
    

    
    
    
    
    
    
    
}