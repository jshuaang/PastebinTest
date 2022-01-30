// 1. Buatlah fungsi dengan parameter berapa banyak angka yg akan ditampilkan secara looping, dimana jika angka tersebut habis dibagi 3 cetak "fish" jika habis dibagi 5 cetak "bash" dan jika habis dibagi 15 cetak "fish bash", cetak cukup salah satu dari kondisi tersebut, cetak menggunakan console log atau sejenisnya.
const num = 100

function show(num){
    let arr = []
    for(let i = 0; i < num; i++){
        if(i === 0){
            arr[i] = i
        }
        else if(i % 15 === 0){
            arr[i] = 'fish bash'
        }
        else if( i % 5 === 0){
            arr[i] = 'bash'
        }
        else if( i % 3 === 0){
            arr[i] = 'fish'
        }
        else{
            arr[i] = i
        }
    }
    return arr
}

console.log(show(num))

// 2. Buatlah fungsi dengan input array integer untuk mengurutkan angka dari kecil kebesar dan besar kekecil dengan manual tanpa fungsi bawaan javascript,
const number = [1,5,3,2,4,9,7,8,6];


function sortArray(array){
    for(let i=0; i<array.length; i++){
        for(let j=0; j<array.length-1; j++ ){
            if(array[j] > array[j+1]){
                let tmp = array[j + 1];
                array[j + 1] = array[j];
                array[j] = tmp;
            }
        }
    }
    return array;
}

sortArray(number);
console.log(number)

// 3. Buatlah fungsi dengan input string jika string tersebut dibalik dan tetap sama dengan string yang diinputkan maka return true jika tidak return false
const str = 'hello'

function checkString(string){
    const oldString = string
    let newString = ''

    for(let i = oldString.length-1; i>=0; i--){
        newString += oldString[i]
    }

    if(oldString === newString){
        return true
    }

    return false
}

console.log(checkString(str))
