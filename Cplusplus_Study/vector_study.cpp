#include <iostream>
#include <vector>

using namespace std;

int main(int argc, char *argv[]) {
    
    vector <char> vowels {'a', 'e', 'i', 'o', 'u'};
    
    cout << vowels[0] << endl;
    cout << vowels[4] << endl;
    
    vector <int> test_score {100, 98, 89};
    
    cout << "Test scores using array syntax" << endl;
    cout << test_score[0] << endl;
    cout << test_score[1] << endl;
    cout << test_score[2] << endl;
    
    cout << "There are " << test_score.size() << " scores in the vector. " << endl;
    
    
    cout << "Test scores using vector syntax: " << endl;
    cout << test_score.at(0) << endl;
    cout << test_score.at(1) << endl;
    cout << test_score.at(2) << endl;
    
    cout << "There are " << test_score.size() << " scores in the vector. " << endl;
    
    
    cout << "Enter 3 test scores ";
    cin >> test_score.at(0);
    cin >> test_score.at(1);
    cin >> test_score.at(2);
    
    cout << "Update test scores: " << endl;
    cout << test_score.at(0) << endl;
    cout << test_score.at(1) << endl;
    cout << test_score.at(2) << endl;
    
    int score_to_add {0};
    cin >> score_to_add;
    
    test_score.push_back(score_to_add);
    
    
    cout << test_score.at(0) << endl;
    cout << test_score.at(1) << endl;
    cout << test_score.at(2) << endl;
    cout << test_score.at(3) << endl;
    
    vector <vector<int>> movie_ratings
    {
        {1, 2, 3, 4},
        {1, 2, 4, 4},
        {2, 5, 7, 8}
    };
    
    cout << "Here are the movie rating for reviewer # 1 using array syntax: " << endl;
    cout << movie_ratings[0][0] << endl;
    cout << movie_ratings[0][1] << endl;
    cout << movie_ratings[0][2] << endl;
    cout << movie_ratings[0][3] << endl;
    
    cout << "Here are the movie rating for reviewer # 3 using vector syntax: " << endl;
    cout << movie_ratings.at(2).at(0) << endl;
    cout << movie_ratings.at(2).at(1) << endl;
    cout << movie_ratings.at(2).at(2) << endl;
    cout << movie_ratings.at(2).at(3) << endl;
    
    
    return 0;
    
}