const fs = require('fs');

function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

fs.readFile('input.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    try {
        const jsonData = JSON.parse(data);
        const dataArray = jsonData.data;

        let totalSum = 0;

        dataArray.forEach(array => {
            const max = findMax(array);
            const min = findMin(array);

            const arraySum = max + min;
            totalSum += arraySum;

            console.log('Array:', array);
            console.log('Max:', max, ', Min:', min);
            console.log('Sum:', arraySum);
            console.log();
        });

        console.log('Total Sum:', totalSum);

    } catch (jsonError) {
        console.error('Error parsing JSON:', jsonError);
    }
});
