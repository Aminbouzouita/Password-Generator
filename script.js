// //Assignment Code
// var generateBtn = document.querySelector("#generate");

// //Write password to the #password input
// var password = generatePassword();
// var passwordText = document.querySelector("#password");
//     passwordText.value = password;
// //Add event listener to generate button
//  generateBtn.addEventListener("click", writePassword);
 
  
  
function generatePassword(){
  const lowercase = [`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`,`k`,`l`,`m`,`n`,`o`,`p`,`q`,`r`,`s`,`t`,`u`,`v`,`w`,`x`,`y`,`z`]; 
  const uppercase = [`A`,`B`,`C`,`D`,`E`,`F`,`G`,`H`,`I`,`J`,`K`,`L`,`M`,`N`,`O`,`P`,`Q`,`R`,`S`,`T`,`U`,`V`,`W`,`X`,`Y`,`Z`];
  const spcharacter = [`!`,`@`,`#`,`$`,`%`,`^`,`&`,`*`,`/`,`"`,`(`,`)`,`-`,`_`,`=`,`+`,`|`,`[`,`]`];
  let password = ``;
  const number = [`0`,`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`];
  let i = 0;
  let lengthpassword = prompt(`How many characters do you like in your password ? minimum 8 and maximum 128 ?`);
  var uppercasech = confirm(`Do you like uppercase characters in your password? ABCDEFG..`);
  var lowercasech = confirm(`Do you like lowercase characters in your password? abcdefg..`);
  var numbersech = confirm(`Do you like numbers in your password? 0123456..`);
  var specialch = confirm(`Do you like special characters in your password? @#$%^&*()..`);
  while ( i < 129 ){

    if (uppercasech === true){ 
     
     password += uppercase[Math.floor(Math.random() * 26)];
     i++;
    }
      
    if (lowercasech === true ){
     
     password+= lowercase[Math.floor(Math.random() * 26)]; 
     i++;
   }
    if (numbersech === true ){

     password+= number[Math.floor(Math.random() * 10)];
     i++;
    }
    if(specialch === true ){
           
     password+= spcharacter[Math.floor(Math.random() * 19)];
     i++;
    } 
    
  }
  console.log(password);
return password;
}  
 generatePassword(); 
