#include <iostream>
#include <string>

using namespace std;

class Deep 
{
private:
    int *data;

public:
    void set_data_value(int d){ *data = d; }
    int get_data_value() {return *data; }
    
    // Constructor
    Deep(int d);
    
    // Copy Constructor
    Deep(const Deep &source);
    
    // Destructor
    ~Deep();
};

Deep::Deep(int d){
    data = new int;
    *data = d;
}

// Two points with the same data
Deep::Deep(const Deep &source)
    : Deep {*source.data} {
        cout << "Copy constructor - Deep copy" << endl;
}

Deep::~Deep(){
    delete data;
    cout << "Destructor freeing data" << endl;
}

void display_shallow(Deep s){
    cout << s.get_data_value() << endl;
}

int main(int argc, char *argv[]) {
    Deep obj1 {100};
    display_shallow(obj1);
    
    Deep obj2 {obj1};
    obj2.set_data_value(1000);
}
