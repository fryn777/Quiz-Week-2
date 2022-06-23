//No1

function totalLompat(x,y,k) {

    let angka = 0;

    for (let i = x; i < y; i+=k) {
       angka = angka+1;
     
    }

     return angka

}

console.log(totalLompat(10,85,30));