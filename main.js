function pernicious(n){

    let firstNumb = 3;

    if (n > 1) {

        let nRoundedDown = Math.floor(n);

        let result = [];

        while (firstNumb <= nRoundedDown) {

            let binaryString = firstNumb.toString(2);

            let onesString = binaryString.split("");

            let binaryNumb = onesString.map(num => parseInt(num));

            let binarySum = 0;

            let x = 0;

            let y = 2;

            let arrOperations = [];

            while (x < binaryNumb.length) {

                binarySum += binaryNumb[x];
                x++

            }

            while (y <= Math.sqrt(binarySum)) {

                const binarySumDividY = binarySum / y;
                
                console.log(binarySumDividY);
                // console.log(binarySum);

                arrOperations.push(binarySumDividY);


                console.log(binarySum % y == 1);

                y++
            }

            // while (y < binarySum && binarySum != 1) {

            //     arrOperations.push(binarySum / y);

            //     if (arrOperations.some(Number.isInteger)) {
            //         break
            //     } else if (!arrOperations.some(Number.isInteger)) {
            //     result.push(firstNumb);
            //     }

            //     y++
            // }

            if (!arrOperations.some(Number.isInteger) && binarySum != 1 || binarySum == 2) {
                result.push(firstNumb);
            } //else {
            //     result.push(firstNumb);
            // }

            

            

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
            console.log(binarySum / y);
            console.log(arrOperations);
            console.log(Math.sqrt(binarySum));

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

console.log(pernicious(7));