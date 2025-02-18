function validatePassword(pass1, pass2){
  if(pass1 !== pass2){
    return false
  } // use strong equality to check if they are not equal

  if(pass1.length < 8){
    return false;
  } // check if the string is less than 8

  let hasUpper = false, hasLower = false, hasNumber = false;
  for (let char of pass1) {
      if (char >= 'A' && char <= 'Z') hasUpper = true;
      if (char >= 'a' && char <= 'z') hasLower = true;
      if (char >= '0' && char <= '9') hasNumber = true;
  }

  // check if it has at least one uppercase, lowercase, number  
  
  
  return hasUpper && hasLower && hasNumber;
}


function reverseString(pass1){
  let reversed = "";

  for (var a = pass1.length - 1; a >= 0; a--){
    reversed += pass1[a];
  }

  return reversed; //return the reversed string 
}

function storePassword(name, pass1, pass2){
  const isValid = validatePassword(pass1, pass2);  // check if the passwords are valid

  return{
    name : name,
    newpassword: isValid ? reverseString(pass1) : pass1  // return the object
  };

}


console.log(storePassword("John", "Pass1234", "Pass1234"));
console.log(storePassword("Jane Doe", "Pass123", "Pass12345"));


