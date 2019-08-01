// What is the spread operator and why would I want to use it?

  /*
  const graham2018 = {
    name: "Graham",
    employer: "Access Labs",
    borough: "Brooklyn",
    shopsAtUniqloTooMuch: true,
    whatever: true
  }

  const goodHabits = {
    shopsAtUniqloTooMuch: false,
    eatsLotsOfVegetables: true,
    sleeps8Hours: true
  }

  //can I do this in a more DRY way?
  const graham2019 = {
    ...goodHabits,
    ...graham2018, 
    pets: [
      "elliott"
    ],
  }

  const newYearSameMe = {
    ...graham2018
  }


  // console.log(graham2018)
  console.log(graham2019)
  // console.log(newYearSameMe)
  // console.log(newYearSameMe === newYearSameMe)
  // console.log(newYearSameMe === graham2018)
// 

*/
// Could I do it to an array?

  /*
  const bodyParts = ["head", "shoulders", "knees", "toes", "eyes", "ears"];

  const funSong = [ ...bodyParts.slice(3, 5), "knees", "toes"];

  // console.log(funSong2)
  console.log(funSong.join(" and "))
  // console.log(funSong2.join(" and "))

  */

// Could I do it to the parameters of a function?

  // function canTakeSixArguments(one, two, three, four, five, six) {
  //   console.log(one)
  //   console.log(two)
  //   console.log(three)
  //   console.log(four)
  //   console.log(five)
  //   console.log(six)
  // }



  const extendedDanceRemix = ["head", "shoulders", "knees", "toes", "knees", "toes"];
  
  // canTakeSixArguments(...extendedDanceRemix, "blat", "potato")



function banana(...poop) {
  console.log(poop)
}


banana(...extendedDanceRemix);

// banana(5, [], { potato: "🥔" }, "hello", "goodbye", "🤡", ...extendedDanceRemix)























