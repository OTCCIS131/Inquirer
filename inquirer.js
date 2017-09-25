const inquirer = require('inquirer')
const chalk = require('chalk')


console.log('Welcome to Chads Pizza!!')

var questions = [{
    message: "Address for the order??",
   name:  'address',
      type: "input",
  },{
    message: "How many?",
   name:  'number',
      type: "list",
   choices:['1','2','3','4','5','6',]
  },{
    message: "Size?",
   name:  'size',
      type: "list",
   choices:['Small','Medium','Large',]
  },{
    message: "How do you want it cut?",
   name:  'cut',
      type: "list",
   choices:['Two slices','four slices','8 or more slices',]
  },{
    message: "Addons?",
   name:  'extras',
      type: 'checkbox',
   choices:['olives','anchovies','extra cheese']
   
 
  }]

inquirer.prompt(questions).then(function({member,mnumb,address,number,size,cut,extras}){

  console.log(chalk.green("\n\nSo you want" ,number, size, "pizzas cut",cut, "with", extras,"at", address,"\n\n"))


  var confirm = [{
   message: "is this request correct",
   name:  'correct',
   type: "confirm",
   choices:['yes','no']
   
  }]


inquirer.prompt(confirm).then(function({correct}){
if (correct == true){
  console.log(chalk.red("Your order has been submitted!!"));
}
else {
  console.log(chalk.blue("sorry, currently univalible"));
}
})


})