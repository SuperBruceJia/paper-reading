#include <iostream>
#include <string>
#include <vector>

using namespace std;

class Player{
public:
    // attributes -> data
    string name {"Player"};
    int health {100};
    int xp {3};
    
    // methods -> operations and functions
    void talk(string text_to_say){
        cout << name << " says " << text_to_say << endl;
    }
    bool is_dead();
};

class Account {
public:
    // attributes
    string name {"Account"};
    double balance {0.0};
    
    // methods
    bool deposit(double bal) {
        balance += bal;
        cout << "In deposit" << endl;
    }
    
    bool withdraw(double bal){
        balance -= bal;
        cout << "In deposit" << endl;
    }
};

int main(int argc, char *argv[]) {
    Account bruce_account;
    bruce_account.name = "Bruce's account";
    bruce_account.balance = 5000.0;
    bruce_account.deposit(1000.0);
    bruce_account.withdraw(500.0);
    
    Player bruce;
    // value of attributes
    bruce.name = "Bruce";
    bruce.health = 100;
    bruce.xp = 12;
    bruce.talk("Hi there");
    
    Player *enemy = new Player;
    (*enemy).name = "Enemy";
    (*enemy).health = 100;
    enemy->xp = 15;
    enemy->talk("I will destroy you!");
    
//    Account bruce_account;
//    Account shuyue_account;
//
//    Player bruce;
//    Player hero;
//
//    Player players [] {bruce, hero};
//    vector<Player> player_vec {bruce};
//    player_vec.push_back(hero);
//
//    Player *enemy {nullptr};
//    enemy = new Player;
//    delete enemy;
    
    return 0;
}
