function introduction(name) {
    return `Hi, my name is ${name}`
  }
  introduction("Aki")
function introductionWithLanguage(name,language){
    console.log(`my name is ${name} and i am learning to program in ${language}`)
}
introductionWithLanguage("Aki","Ember.js")
function introductionWithLanguageOptional(name, language = "JavaScript") {
    console.log(`my name is ${name} and i am learning to program in ${language}`);
  }
  introductionWithLanguageOptional("Aki");
  