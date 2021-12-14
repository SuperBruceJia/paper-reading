#include <iostream>

using namespace std;

// Function Prototype
double calc_area_circle(double radius);
void area_circle();
double calc_volume_cylinder(double radius, double height);
void volume_cylinder();

const double pi_value {3.1415926};


int main(int argc, char *argv[]) {
    area_circle();
    volume_cylinder();
    
    return 0;
}

double calc_area_circle(double radius){
    return pi_value * radius * radius;
}

void area_circle(){
    double radius {};
    cout << "\n Enter the radius of the circle: ";
    cin >> radius;
    
    cout << "The area of a circle with radius " << radius << " is " << calc_area_circle(radius) << endl;
}

double calc_volume_cylinder(double radius, double height){
    return calc_area_circle(radius) * height;
}

void volume_cylinder(){
    double radius {};
    double height {};
    
    cout << "\n Enter the radius of the cylinder: ";
    cin >> radius;
    
    cout << "\n Enter the height of the cylinder: ";
    cin >> height;
    
    cout << "The area of a cylinder with radius " << radius << " and height " << height << " is " << calc_volume_cylinder(radius, height) << endl;
}
