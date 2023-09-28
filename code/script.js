function isPalindrome(text) {
    text = text.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
    var len = text.length;
    
    for (var i = 0; i < len / 2; i++) {
        if (text[i] !== text[len - 1 - i]) {
            return false;
        }
    }
    
    return true;
}

function checkPalindrome() {
    var inputText = document.getElementById("inputText").value;
    var result = document.getElementById("result");

    if (isPalindrome(inputText)) {
        result.innerText ='"' + inputText + '"is a palindrome!';
    } else {
        result.innerText = '"' + inputText + '"is not a palindrome.';
    }
}


// let arr=[1,2,3,4,5,6,7,8,9,10]
// let input=prompt("Enter a Value")
// input=Number.parseInt(input)

//     for(let i=0; i<=arr.length; i++){
//          if(arr[i]=== input){
//             console.log(i)
//             break;
//         }
//         else{
//             console.log("mc")
//         }
        
//     }

// let arry = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let input = prompt("Enter the input between 1 to 10 and get the value");
// input = Number.parseInt(input);
    
//     for (let i = 0; i <= arry.length; i++) {
//         if (arry[i] === input) {
//             console.log(i)
//             break;
//         }
//         else{
//             console.log("mc")
//         }


//   
//      
//     }




// let arr=[1,3,4,5,6,7]
// let target=7;

// for(let i=0; i<arr.length;i++){

//      for(let j=i+1; j<arr.length;j++){
//        if(arr[i]+arr[j]==target){
//         console.log(i,j)
//        } 
//     }
// }



// stars task
//     for(var i=1; i<=4; i++){
//         var star=""
//     }
//     for(var j=1; j<=i; j++){
//          star+="*"
//          console.log(star)
//     }


// arr.forEach(function(value){
//     if(input==value){
//         console.log(input)
//     }
// })



