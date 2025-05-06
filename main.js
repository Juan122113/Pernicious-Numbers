function pernicious(n){

    let firstNumb = 2;

    if (n > 1) {

        let NRoundedDown = Math.floor(n);

        while (firstNumb <= NRoundedDown) {

            let binaryString = firstNumb.toString(2);

            let onesString = binaryString.split("");

            // let binaryNumb = parseInt(onesString);
            // let binaryNumb = [];
            // binaryNumb = parseInt(onesString);

            let binaryNumb = onesString.map(num => parseInt(num));

            let binarySum = 0;

            let x = 0;

            while (x < binaryNumb.length) {

                binarySum += binaryNumb[x];
                x++
            }

            // for (let k = 0; k < binaryNumb.length; k++) {
            //     let sum = 
            // }

            // let binaryNumb = 0;

            // let binarySum = 0;

            // let binarySum = binaryNumb.map(numb => numb + numb);

            

            // for (let i = 0; i < onesString.length ;i++){

            //     // binaryNumb = parseInt(onesString[i]);
            //     // binarySum = binaryNumb[i] + binaryNumb[i+1];
            //     binarySum = onesString[i] + onesString[i+1];
            //     // console.log(binaryNumb);
            //     console.log(binarySum);
            // }

            firstNumb++;
    
            // console.log(firstNumb);
            console.log(onesString);
            console.log(binaryNumb);
            console.log(binarySum);
            // console.log(onesNumb);

        }

        console.log(NRoundedDown);
    
    } else {

        return "No pernicious numbers";

    }

    console.log(firstNumb);

}

console.log(pernicious(5.5));