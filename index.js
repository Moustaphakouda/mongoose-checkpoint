import Human from "./document/model/Schema.js";
import Database from "./document/motor.js";
let MesDonnees = new Database();
// creer un utilisateur

let human = new Human({
    name : "moustapha",
    age :23,
    FavoriteFood :["orangina", "chtep"]
})

// human.save().then((human)=>{
//     console.log(human);
// })

// pour enregistrer plusieurs element avec create

Human.create([
    {
        name : "hamza",
    age :15,
    FavoriteFood :["kabato", "sauce dah"]
    },
    {
        name : "nick",
    age :26,
    FavoriteFood :["riz blanc", "l'eau"]
    }
]);

Human.find().then((human)=>{
    console.log(human);
})

// rechercher une personne grace a sa nouriture favorite super

Human.findOne({FavoriteFood :"kabato"}).then((human)=>{
    console.log(human);
})

// rechercher une personne grace a son id 
let Id = "654585997040f45251a74cdb"
Human.findById(Id).then((human)=>{
    console.log(human);
})


// faire des mises a jour en ajouttant 
let findEditThenSave = function(personId, done) {
    let foodToAdd = 'hamburger';
    Human.findById(personId, function(err, data) {
      data.FavoriteFood.push(foodToAdd).save();
      if (err) {
        return done(err);
      }
      else {
        done(null, data);
      }
    });
  };

//   mettre a jour son age
  const filter = { name: 'nick' };
  const update = { age:20};
  const doc = await Human.findOneAndUpdate(filter, update, {
    new: true
  });
  doc.name; 
  doc.age; 
  console.log(doc);

//   pour supprimer une personne par son id

const supp = { _id:'654585997040f45251a74cdb'};
const Remove = {name:'nick'};
const det = await Human.findOneAndRemove(supp,Remove, {
  new: true
});
doc._id; 
doc.name; 
console.log(det);

