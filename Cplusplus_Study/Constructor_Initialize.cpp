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
    Player();
    Player(string name_val);
    Player(string name_val, int health_val, int xp_val);
};

//Player::Player(){
//    name = "None";
//    health = 0;
//    xp = 0;
//}
//
//Player::Player(string name_val){
//    name = name_val;
//    health = 0;
//    xp = 0;
//}
//
//Player::Player(string name_val, int health_val, int xp_vavl){
//    name = name_val;
//    health = health_val;
//    xp = xp_vavl;
//}

//Player::Player() 
//    : name {"None"}, health {0}, xp {0}{
//}
//
//Player::Player(string name_val) 
//    : name {name_val}, health {0}, xp {0} {
//}
//
//Player::Player(string name_val, int health_val, int xp_vavl) 
//    : name {name_val}, health {health_val}, xp {xp_vavl}{
//}

// Delegating Constructor
// Default Constructor -> Specific Constructor
Player::Player() 
: Player {"None", 0, 0} {
    cout << "No-args constructor" << endl;
}

Player::Player(string name_val) 
: Player {name_val, 0, 0} {
    cout << "One arg constructor" << endl;
}

Player::Player(string name_val, int health_val, int xp_vavl) 
: name {name_val}, health {health_val}, xp {xp_vavl}{
    cout << "Three-args constructor" << endl;
}

int main(int argc, char *argv[]) {
    Player empty;
    cout << endl;
    
    Player bruce {"Bruce"};
    cout << endl;
    
    Player jia {"jia", 100, 55};
    
    return 0;
}
