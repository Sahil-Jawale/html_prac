import inquirer from 'inquirer';
import qr from "qr-image";
import fs from "fs";    


inquirer
  .prompt([
    {message: "Type in your URL", 
     name : "URL"}
  ])


  .then((answers) => {
    console.log(answers);   
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_image.png'));
    
    fs.appendFile("URL.txt", url + "\n", (err) => {
      if (err) throw err;
      console.log("URL has been added to URL.txt");
    });

  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment.");
    } else {
      console.log("Something else went wrong.")
    }
  });


