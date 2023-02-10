const testResults = [
    { student: 'Greg', subject: 'English', score: 90 },
    { student: 'Spike', subject: 'Math', score: 75 },
    { student: 'Moose', subject: 'History', score: 92 },
    { student: 'Peter', subject: 'English', score: 85 },
    { student: 'Chicken', subject: 'Math', score: 50 },
    { student: 'Spike', subject: 'English', score: 79 },
    { student: 'Chicken', subject: 'English', score: 33 },
    { student: 'Peter', subject: 'Math', score: 82 },
    { student: 'Chicken', subject: 'History', score: 65 },
    { student: 'Greg', subject: 'Math', score: 87 },
    { student: 'Spike', subject: 'History', score: 93 },
  ];
// 1.a) Using the .filter method, create an array called gregResults that only contains Greg's testResults
let tr_g = testResults.filter(item => item.student === "Greg");
console.log(tr_g);

// 1.b) Using the .filter method, create an array called englishResults that only contains 'English' testResults
let englishResults = testResults.filter(item => item.subject === 'English');
console.log(englishResults);

// 1.c) Using the array created for 1.a, create an array called gregScores only containing Greg's scores
// Example: [50, 90, ect]
let gregScores = tr_g.map(item => item.score);
console.log(gregScores)

// 2) Create a function called testAverage, which will take test results and return the average test score
// These are the requirements of the function:
// A single parameter that accepts an array as an argument (we will be using the arrays created earlier)
// NOTE: Remember, each item of the arrays above are objects
// Inside the function, iterate through the array to gain access to the values of each property
// HINT: This is VERY similar to how we accessed values from properties in objects
function testAverage(arr){
    let scores = arr.map(item => item.score);
    return scores.reduce((acc, cur) => acc + cur) / scores.length;
}

console.log(testAverage())