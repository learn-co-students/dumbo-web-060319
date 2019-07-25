
class Person {

  constructor(nameParam, fullNameParam){
    this.name = nameParam
    this.fullName = fullNameParam
    // Instructor._all = Instructor._all || []
    // Instructor._all.push(this)
  }

  introduce(){
    return `Hello, I'm ${ this.fullName }`
  }

}



class Instructor extends Person {


  constructor(name, firstName, thingsTheyTeach){
    super(name, firstName)
    this.thingsTheyTeach = thingsTheyTeach
    // console.log(thingsTheyTeach)
  }

  teach(){
    return "Blah blah blah"
  }

  // toString(){
  //   return "[instructor Instructor]"
  // }

  // static all(){
  //   return this._all;
  // }

}


/*

class Instructor

  attr_reader :name, :full_name

  # constructon
  def initialize(name) 
    @name = name
    @full_name = "Barbara Bush"
  end

  def introduction
    "Hello, I'm #{ self.name }!"
  end

end

*/


const introduce = function(){
  console.log(this)
  return `Hello, I'm ${ this.fullName }`
}

const nicky = {
  fullName: "Nicholas Dover",
  name: "Nicky",
  introduce: introduce
}

// const graham = {
//   legalName: "Graham Aden Troyer-Joy",
//   name: "Graham",
//   introduce: introduce
// }

// const gracie = {
//   fullName: "M. Gracie MaçkGuiér III",
//   name: "Gracie",
//   introduce: introduce
// }


// // console.log(nicky.introduce())
// // console.log(graham.introduce())
// // console.log(gracie.introduce())

// // console.log(nicky.introduce === graham.introduce)
// // console.log(nicky.introduce() === graham.introduce())





