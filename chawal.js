



// let a=prompt("enter name");

// if(isNaN(a)){
//     alert("valid input");
// }else{
//     alert("invalid input");
// }







// let p = prompt("Enter the length of password you want (must be between 10-15)");
// let passwordLength = parseInt(p.trim());

// let u_c = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// let l_c = "abcdefghijklmnopqrstuvwxyz";
// let d_c = "0123456789";
// let s_c = "!@#$%^&*()_+";
// let pass = "";

// if (!isNaN(passwordLength) && passwordLength >= 10 && passwordLength <= 15) {
//     // Ensure the password has at least one character from each category
//     pass += u_c[Math.floor(Math.random() * u_c.length)];
//     pass += l_c[Math.floor(Math.random() * l_c.length)];
//     pass += d_c[Math.floor(Math.random() * d_c.length)];
//     pass += s_c[Math.floor(Math.random() * s_c.length)];

//     // Fill the rest of the password length with random characters from all categories
//     let allCharacters = u_c + l_c + d_c + s_c;
//     for (let i = 4; i < passwordLength; i++) {
//         pass += allCharacters[Math.floor(Math.random() * allCharacters.length)];
//     }

//     // Shuffle the password to ensure randomness
//     pass = pass.split('').sort(() => Math.random() - 0.5).join('');
    
//     console.log("Generated Password: " + pass);
// } else if (p === "") {
//     alert("Password can't be empty");
// } else {
//     alert("Password length must be between 10 and 15");
// }

// 
// let a = +prompt("Enter your guessing Number");
// alert(`add same number for your friend`);
// let b = +prompt("Enter your friend's  Number");
// if(!isNaN(a==b)){
//  let c=a+b;
//  let d=prompt("add my number");

// d=a+b+c
// alert("give half amount to the charity");
// let charity=prompt("enter amount to the charity")
// if( charity==d/2){
//     let sum=charity-b;
//    alert(`your guessing number is ${sum}`);
// }else{
//     console.log("enter same number for your friend baap se aage jaega")
// }
 
// }else{
//     alert("invalid input");
// }

// function generatePassword(length, useUppercase, useLowercase, useDigits, useSpecial) {
//     let characterPool = '';

//     // Build the character pool based on user preferences
//     if (useUppercase) {
//         characterPool += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//     }
//     if (useLowercase) {
//         characterPool += 'abcdefghijklmnopqrstuvwxyz';
//     }
//     if (useDigits) {
//         characterPool += '0123456789';
//     }
//     if (useSpecial) {
//         characterPool += '!@#$%^&*()_+[]{}|;:,.<>?';
//     }

//     // Check if the character pool is empty
//     if (characterPool.length === 0) {
//         return "Error: At least one character type must be selected.";
//     }

// //     // Generate the password
// //     let password = '';
// //     for (let i = 0; i < length; i++) {
// //         const randomIndex = Math.floor(Math.random() * characterPool.length);
// //         password += characterPool[randomIndex];
// //     }

// //     return password;
// // }

// // // Example usage
// // const length = prompt("Enter the desired password length:");
// // const useUppercase = confirm("Include uppercase letters?");
// // const useLowercase = confirm("Include lowercase letters?");
// // const useDigits = confirm("Include digits?");
// // const useSpecial = confirm("Include special characters?");

// // // Generate and display the password
// // const generatedPassword = generatePassword(parseInt(length), useUppercase, useLowercase, useDigits, useSpecial);
// // console.log("Generated Password:", generatedPassword)
// // function generatePassword() {
// //     const length = Math.floor(Math.random() * (15 - 10 + 1)) + 10; // Random length between 10 and 15
// //     const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:',.<>?"; // Character set
// //     let password = "";

// //     for (let i = 0; i < length; i++) {
// //         const randomIndex = Math.floor(Math.random() * charset.length);
// //         password += charset[randomIndex];
// //     }

// // //     return password;
// // // }

// // // // Example usage
// // // const newPassword = generatePassword();
// // // console.log("Generated Password:", newPassword)

// 
// d=new Date()

//  console.log(d.getMinutes())



let a=prompt("enter  your value in ( head or tail)");
let b=prompt("enter  friend value in ( head or tail)");

let lengthA=a.length;
 let lengthB=b.length;
if (!isNaN(lengthA) && !isNaN(lengthB) && (lengthA < 5 && lengthB < 5)){
  if((a.toLowerCase()=="head"||a.toLowerCase()=="tail")&&(a.toLowerCase()=="head"||a.toLowerCase()=="tail")){
let arr=[a,b];
let arrLength =arr.length;
if(arr[0]!==arr[1]){
    
    for(i=0;i<arrLength;i++){
        let win = Math.floor(Math.random()*arrLength);
        if (arr[win] ==a) {
            console.log("First player is the winner");
        } else if (arr[win] ==b) {
            console.log("Second player is the winner");
        } else {
            console.log("No One Wins");
        }
    }
}else{
    console.log("it is a tie");
}

  }else{
    console.log(`please enter the value in (head or tail)`);
  }
}
else{
    console.log(`Please enter the value in range of length 4 like head and tail`);
}


