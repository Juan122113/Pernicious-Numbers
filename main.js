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
                
                arrOperations.push(binarySumDividY);

                y++
            }
          
            if (!arrOperations.some(Number.isInteger) && binarySum != 1 || binarySum == 2) {
                result.push(firstNumb);
            } 

            firstNumb++;
    
        }

        if (result.length == 0) {
            return "No pernicious numbers";
        }

        return result;

    } else {

        return "No pernicious numbers";

    }

}

console.log(pernicious(7));