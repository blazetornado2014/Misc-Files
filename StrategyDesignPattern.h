using namespace std;

/*
    COMPOSITION CLASS
*/
class Pet{
private:
/* Pet Attributes*/
// Used in ChangeAttribute
vector<string> petName;
vector<string> petGender;
vector<string> petPronouns;
vector<string> petVoice; // Select voice option for the pet
vector<int> petAge;

/* Pet appearance */
/* This can be expanded to a 2D matrix for in-depth customization */
vector<int> appearance[] // = {0, 0, 0} The 3 values represent hands, legs, head


/* Pet stats */
// Used in PetTrain
vector<int> petTraits[]; /* Same as appearance. 0 denotes Trait inactive / unobtained, 1 denotes active / obtained */
vector<int> trainingLevel = 0;
vector<int> trainingExp = 0;

vector<Action> petAction;

Pet();
public:
/* Simple training function that levels pet and gives more trait, modifies petTraits, trainingLevel based on trainingExp */
void PetTrain();

void PetAction();

/* Function defines the appearance of a pet by modifying integer values, with each number corresponding to a different body type */
void SetAppearance();

/* Function defines the attributes of a pet by modifying values like name, gender, pronouns and voice type */
void SetAttribute();

/* GETTERS AND SETTERS */

/* SETTERS */
void SetPetName(const vector<string> &str);
void SetPetGender(const vector<string> &str);
void SetPetPronouns(const vector<string> &str);
void SetPetVoice(const vector<int> &n); //Select type of voice using number input
void SetPetAge(const vector<int> &n);

/* GETTERS */
string GetPetName();
string GetPetGender();
string GetPetPronouns();
int GetPetVoice();
int GetPetAge();
};

// Strategy design pattern is applicable here
class Action{
    virtual void PetAction() = 0;
};

/* Action Strategy */
class Eat : Action{
    void PetAction() override;
}

class Play : Action{
    void PetAction() override;
}

class Bark : Action{
    void PetAction() override;
}
