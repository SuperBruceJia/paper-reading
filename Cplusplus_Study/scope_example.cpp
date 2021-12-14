#include <iostream>

using namespace std;

void local_example(int);
void global_example();
void static_local_example();

int num {300};
void local_example(int x){
    int num {100000};
    cout << "Local num is: " << num << " in inner_example - start" << endl;
    num = x;
    cout << "Local num is: " << num << " in inner_example - end" << endl;
}

void global_example(){
    cout << "Global num is: " << num << " in global_example - start" << endl;
    num *= 2;
    cout << "Global num is: " << num << " in global_example - end" << endl;
}

void static_local_example(){
    static int num {5000};
    cout << "Local static num is: " << num << " in static_local_example - start" << endl;
    num += 1000;
    cout << "Local static num is: " << num << " in static_local_example - end" << endl;
}

int main(int argc, char *argv[]) {
    
    int num {100};
    int num1 {500};
    
    cout << "Local num is: " << num << " in main" << endl;
    
    {
        int num {200};
        cout << "Local num is: " << num << " in inner block in main" << endl;
        cout << "Inner block in main can see out - num1 is: " << num1 << " in main " << endl;

    }
    
    cout << "Local num is: " << num << " in main" << endl;
    
    local_example(10);
    local_example(20);
    cout << "Local num is: " << num << " in main" << endl;
    
    global_example();
    global_example();

    cout << "Local num is: " << num << " in main" << endl;
    
    static_local_example();
    static_local_example();
    cout << "Local num is: " << num << " in main" << endl;

    return 0;
}