var libreria = {
    randomName: function getRandomName() {
        let max = 4;
        let min = 0;
        let nombres = ['Juan', 'Maria', 'John', 'Jane', 'Manuel'];
        return nombres[Math.floor(Math.random() * (max - min + 1) + min)];
    }
};

//Exporto mi objeto
module.exports = libreria;

// let nombres = ['Juan', 'Maria', 'John', 'Jane', 'Manuel'];

// function randomIntFromInterval(min, max) { // min and max included 
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }

// function getRandomName(){
//     return nombres[randomIntFromInterval(0, 4)];
// }

// console.log(getRandomName());