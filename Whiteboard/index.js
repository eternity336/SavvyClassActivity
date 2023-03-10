const sodas = [
    {
        "name": "Pepsi",
        "sugarFree": false,
        "energy": false,
        "image": "fake.cdn/pepsi.jpg"
    },
    {
        "name": "Coke",
        "sugarFree": false,
        "energy": false,
        "image": "fake.cdn/coke.jpg"
    },
    {
        "name": "NOS",
        "sugarFree": false,
        "energy": true,
        "image": "fake.cdn/nos.jpg"
    },
    {
        "name": "Diet Pepsi",
        "sugarFree": true,
        "energy": false,
        "image": "fake.cdn/diet_pepsi.jpg"
    }
]

const first_attributeList = [
    "name",
    "image"
];

const second_attributeList = [
"name",
"sugarFree",
"energy"
];

function play(attributeList){
    let soda_line = "";
    
    sodas.forEach(soda => {
        let line = [];
        attributeList.forEach(item => line.push( `${item}: ${soda[item]}`));
        soda_line += `${line.join(', ')} \n`
    });

    console.log(soda_line);
}

function play2(attributeList){
    console.log(sodas.map(soda => attributeList.map(item => `${item}: ${soda[item]}`).join(', ')).join('\n'));
}

play2(first_attributeList);
console.log('-----------------');
play2(second_attributeList);
