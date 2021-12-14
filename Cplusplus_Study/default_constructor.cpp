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
    void set_name(string name_val){
        name = name_val;
    }
    
    string get_name(){
        return name;
    }
    
    // Default Constructor
    Player(){
        name = "None";
        health = 100;
        xp = 3;
    }
    
    // Overloaded Constructor
    Player(string name_val, int health_val, int xp_val){
        name = name_val;
        health = health_val;
        xp = xp_val;
    }
};

int main(int argc, char *argv[]) {
    Player hero;
    cout << hero.get_name() << endl;
    
    Player bruce {"Bruce", 100, 13};
    bruce.set_name("Bruce");
    cout << bruce.get_name() << endl;
    
    return 0;
}