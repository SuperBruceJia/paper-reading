#include <iostream>
#include <string>

using namespace std;

class Player
{
private:
    string name;
    int health;
    int xp;

public:
    // Overloaded Constructors
//    Player();
//    Player(string name_val);
//    Player(string name_vval, int health_val, int xp_val);
    
    Player(
        string name_val = "None", 
        int health_val = 0, 
        int xp_val = 0
    );
};

//Player::Player()
//    : Player {"None", 0, 0}{
//        cout << "No args constructor" << endl;
//}
//
//Player::Player(string name_val)
//    : Player {name_val, 0, 0}{
//        cout << "One arg constructor" << endl;
//}
//Player::Player(string name_val, int health_val, int xp_val)
//    : name {name_val}, health {health_val}, xp {xp_val} {
//        cout << "Three args constructor" << endl;
//}

Player::Player(string name_val, int health_val, int xp_val)
    : name {name_val}, health {health_val}, xp {xp_val} {
        cout << "Three args constructor" << endl;
}

int main(int argc, char *argv[]) {
    Player empty;
    cout << endl;
    
    Player bruce {"bruce"};
    cout << endl;
    
    Player shuyue {"shuyue", 100};
    cout << endl;
    
    Player jia {"jia", 100, 55};
    
    return 0;
}