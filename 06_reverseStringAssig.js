let reverseString = function name(str) {
   
    for (let index = str.length-1; index >= 0; index--) {
        let char = str.charAt(index);

    if (char != " ") {
        
        console.log(char);
    }
        
        
    }
    console.log(`------------------------------`);
    
}
reverseString(`Hard Work Always pays back`);
reverseString(`Soon I will be UI IT Champ`);