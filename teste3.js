//console.log("Hello World");

function returnEvenValues(array) {
    for(let i = 0; i < array.lenght;) {
        if(array[i] % 2 === 0){
            evenNums.push(array[i]);
        }

    }
    console.log(evenNums);
}

let array = [1, 2, 4, 5, 7, 8]

returnEvenValues(array);