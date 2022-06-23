//no 3

const array1 = ["Mangga","Apel","Melon","Pisang","Sirsak","Tomat","Nanas",
"Nangka","Timun","Mangga"]

const array2 = ["Bayam","Wortel","Kangkung","Mangga","Tomat","Kembang Kol",
"Nangka","Timun"]

function checkArray(arr1,arr2) {

    const same = arr1.filter(element => arr2.includes(element));
    const difference1   = arr1.filter(element => arr2.indexOf(element) === -1);
    const difference2   = arr2.filter(element => arr1.indexOf(element) === -1);

    const unique = Array.from(new Set(same));
    const arraygabungan = difference1.concat(difference2);
    
    console.log(unique);
    console.log(arraygabungan)

}

console.log(checkArray(array1,array2));