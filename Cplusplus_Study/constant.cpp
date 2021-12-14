#include <iostream>

using namespace std;

int main(int argc, char *argv[]) {
    int num_small_room {0};
    int num_large_room {0};
    
    const double price_small_room {25.0};
    const double price_large_room {35.0};
    
    const float tax_ratio {0.06};
    const int estimate_expiry {30};
    
    cout << "Hello, welcome to Bruce\' Carprt Services!\n" << endl;
    
    cout << "How many small rooms world you like cleaned?\n" << endl;
    cin >> num_small_room;
    
    cout << "How many large rooms world you like cleaned?\n" << endl;
    cin >> num_large_room;
    
    cout << "Estimated for carpet cleaning service " << endl;
    cout << "Number of rooms: " << num_small_room + num_large_room << endl;
    cout << "Price per small room: $" << price_small_room << endl;
    cout << "Price per large room: $" << price_large_room << endl;

    cout << "Cost: $" << 
    (price_small_room * num_small_room) 
    + (price_large_room * num_large_room) 
    << endl;
    
    cout << "Tax: $" << 
    ((price_small_room * num_small_room) + (price_large_room * num_large_room)) 
    * tax_ratio << endl;
    cout << "=========================================" << endl;
    cout << "Total estimate: $" << 
    ((price_small_room * num_small_room) 
        + (price_large_room * num_large_room)) 
    * (1 + tax_ratio) << endl;
    cout << "This estimate is valid for " << estimate_expiry << " days" << endl;
    return 0;
}
