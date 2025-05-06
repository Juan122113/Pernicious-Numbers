function pernicious(n){

    let firstNumb = 2;

    if (n > 1) {

        while (firstNumb < n) {

            firstNumb++;
    
            // console.log(firstNumb);
        }
    
    } else {

        return "No pernicious numbers";

    }

    console.log(firstNumb);

}

console.log(pernicious(1));