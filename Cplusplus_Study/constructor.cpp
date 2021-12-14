#include <iostream>
#include <string>

using namespace std;

class Player
{
public:
    string name;
    int health;
    int xp;

public:
    void set_name(string name_val){
        name = name_val;
    }
    
    // Overloaded Constructors
    Player(){
        cout << "No args constructor called" << endl;
    }
    
    Player(string name){
        cout << "String arg constructor called" << endl;
    }
    
    Player(string name, int health, int xp){
        cout << "Three args constructor called" << endl;
    }
    
    ~Player(){
        cout << "Destructor called for " << name << endl;
    }
};

int main(int argc, char *argv[]) {
    {
        Player slayer;
        slayer.set_name("Slayer");
        cout << endl;
    }
    
    {
        Player bruce;
        bruce.set_name("Bruce");
        Player hero("Hero");
        hero.set_name("Hero");
        Player villain("Villain", 100, 12);
        villain.set_name("Villain");
        cout << endl;
    }
    
    Player *enemy = new Player;
    enemy->set_name("Enemy");
    cout << endl;
    
    Player *level_boss = new Player("Level Boss", 1000, 300);
    level_boss->set_name("Level Boss");
    delete enemy;
    delete level_boss;
    cout << endl;
    
    return 0;
}