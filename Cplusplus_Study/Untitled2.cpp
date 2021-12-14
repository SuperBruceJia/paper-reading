#include <iostream>

using namespace std;

int main(){
    
    int room_width {0};
    int room_length {0};
    
    cout << "Enter the width of the Room: ";
    cin >> room_width;
    
    cout << "Enter the length of the Room: ";
    cin >> room_length;
    
    cout << "The area of the room is " << room_width * room_length << endl;
    
    return 0;
}
