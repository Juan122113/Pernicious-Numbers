function pernicious(n){

    let firstNumb = 3;

    if (n > 1) {

        let nRoundedDown = Math.floor(n);

        let result = [];

        while (firstNumb <= nRoundedDown) {

            let binaryString = firstNumb.toString(2);

            let onesString = binaryString.split("");

            // let binaryNumb = parseInt(onesString);
            // let binaryNumb = [];
            // binaryNumb = parseInt(onesString);

            let binaryNumb = onesString.map(num => parseInt(num));

            let binarySum = 0;

            let x = 0;

            let y = 3;

            while (x < binaryNumb.length) {

                binarySum += binaryNumb[x];
                x++

            }

            // if (binarySum % y == 0) {
            //     result.push(firstNumb);
            // }

            if (binarySum == 2) {
                result.push(firstNumb);
            }

            while (y <= binarySum) {

                if (binarySum % y == 0) {
                    result.push(firstNumb);
                }

                y++
            }

            

            // while (y < binarySum) {

            //     if (binarySum % y == 0) {
            //         return "No pernicious numbers";
            //     } else {
            //         result.push(firstNumb);
            //     }
            //     y++
            // }

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
            
            console.log(firstNumb);

            firstNumb++;
    
            console.log(binaryString);
            console.log(onesString);
            console.log(binaryNumb);
            console.log(binarySum);
            console.log(result);
            // console.log(onesNumb);

        }

        

        if (result.length == 0) {
            return "No pernicious numbers";
        }

        return result;

        console.log(nRoundedDown);
        console.log(result == []);
    
    } else {

        return "No pernicious numbers";

    }

    console.log(firstNumb);

}

console.log(pernicious(12));