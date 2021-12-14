#include <iostream>
#include <string>
#include <algorithm>

using namespace std;

string Reverse(string str);

int main() {
    string str;
    cout << "Enter a string:" << endl;
    cin >> str;
    cout << endl;
    
    for (size_t i {0}; i <= str.length(); i++){
        string temp_str = str.substr(0, i);
        
        if (temp_str.length() != 0){
            if (temp_str.length() == 1){
                cout << (string(str.length() - 1, ' ')) << temp_str << endl;
            } else {
                string reverse_str = Reverse(temp_str);
                reverse_str = reverse_str.substr(1, reverse_str.length() - 1);
                string out_str = temp_str + reverse_str;
                cout << (string(str.length() - 1 - reverse_str.length(), ' ')) << out_str << endl;
            }
        }
    }
    
    return 0;
}

string Reverse(string str){
    int len = str.length();
    for (int i {0}; i < len / 2; i++){
        char c {str[i]};
        str[i] = str[len - i - 1];
        str[len - i - 1] = c;
    }
    
    return str;
}
