#include <iostream>
#include <vector>
#include <iomanip>

using namespace std;

int main(int argc, char *argv[]) {
//    for (int i {1}; i <= 10; i+=2){
//        cout << i << endl;
//    }
    
//    for (int i {10}; i > 0; --i){
//        cout << i << endl;
//    }
    
//    for (int i {1}; i <= 100; ++i){
//        if (i % 10 ==0){
//            cout << endl;
//        }
//        else{
//            cout << i << " ";
//        }
//    }
    
//    for (int i {1}; i <= 100; ++i){
//        cout << i << ((i % 10 == 0) ? "\n" : " ");
//    }
    
//    vector <int> nums {10, 20, 30, 40, 50};
//    for (int i {0}; i < nums.size(); ++i){
//        cout << nums[i] << endl;
//    }
    
//    int scores [] {10, 20, 30};
//    for (int score : scores){
//        cout << score << endl;
//    }
    
//    int scores [] {10, 20, 30};
//    for (auto score : scores){
//        cout << score << endl;
//    }
    
//    vector <double> temperatures {45.28, 23.67, 40.98, 59.67};
//    double average_temp {0};
//    double total {0};
//    
//    for (auto temp : temperatures){
//        total += temp;
//    }
//    
//    if (temperatures.size() != 0){
//        average_temp = total / temperatures.size();
//    }
//    
//    cout << fixed << setprecision(1);
//    cout << average_temp << endl;
    
//    for (auto val : {1, 2, 3, 4, 5}){
//        cout << val << endl;
//    }
    
    for (auto c : "This is a test!"){
        
        if (c == ' '){
            cout << "\t";
//        cout << c;
        } else {
            cout << c;
        }
        
    }
    
    return 0;
}