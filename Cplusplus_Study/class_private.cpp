#include <iostream>
#include <string>

using namespace std;

class Player{
private:
    // attributes
    string name {"player"};
    int health;
    int xp;
    
public:
    // method
    void talk(string text_to_say){
        cout << name << " says " << text_to_say << endl;
    }
    bool is_dead();

};

int main(int argc, char *argv[]) {
    Player bruce;
//    bruce.name = "Bruce";
//    cout << bruce.health << endl;
    bruce.talk("hello there.");
    
    return 0;
}