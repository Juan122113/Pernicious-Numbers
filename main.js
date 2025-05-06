function pernicious(n){

    let firstNumb = 2;

    if (n > 1) {

        let NRoundedDown = Math.floor(n);

        while (firstNumb <= NRoundedDown) {

            let binaryNumb = firstNumb.toString(2);

            firstNumb++;
    
            // console.log(firstNumb);
            console.log(binaryNumb);
        }

        console.log(NRoundedDown);
    
    } else {

        return "No pernicious numbers";

    }

    console.log(firstNumb);

}

console.log(pernicious(5.5));