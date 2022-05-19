class Dinosaur{ 
    constructor(id, name, family, timeline, avatarUrl){ 
        this.id = id; 
        this.name = name; 
        this.family = family; 
        this.timeline = timeline; 
        this.avatarUrl = avatarUrl;
    } 
//  per convertire data stringa in data oggetto, in tepo reale
    // get dateOfBirth(){ 
    //     return new Date(this.dob);
    // } 

    // set dateOfBirth(value){ 
    //     this.dob = value.toISOString();
    // }

    static fromObj(obj){ 
        return new Dinosaur(obj.id, obj.name, obj.family, obj.timeline, obj.avatarUrl); 
    }

    //  function getDaysToBirth 
    // fare in modo che gestisca dati, con immagini;
} 
