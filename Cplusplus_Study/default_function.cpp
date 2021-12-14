#include <iostream>
#include <iomanip>
#include <string>

using namespace std;

void greeting(string name, string prefix = "Mr.", string suffix = "");

void greeting(string name, string prefix, string suffix){
    cout << "Hello, " << prefix << " " << name << " " << suffix << endl;
}

int main(int argc, char *argv[]) {
    greeting("Bruce JIA", "Dr.", "M.D.");
    greeting("James Rogers", "Prof.", "Ph.D.");
    greeting("Frank Miller", "Dr.");
    greeting("William Smith");
    greeting("Fei JIA", "Mrs.", "Ph.D.");
    
    return 0;
}