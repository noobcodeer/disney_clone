//to string (bien doi cac phan tu cua mang sang dang chuoi cach nhau bang dau phay)
const array =['banana',"apple","mango"]

const fruits = array.toString()
// console.log(fruits)

//join (giong nhu toString nhung co the thay doi dau ngan cach)
const array1 = array.join('$')
// console.log(array1)

//pop and pup (pop: in ra phan tu cuoi cung) 
const array2 = array.pop();
// console.log(array2)
const array3 = array.pop()
// console.log(array3)
const array4= array.pop()
// console.log(array4)

//push (Them mot phan tu vao cuoi mang)
const arrayF =['banana',"apple","mango"]
const array5 = arrayF.push('Kiwi')
// console.log(arrayF)

//shirts(xoa phan tu dau tien va tra ve mang moi)
const arr =['banana',"apple","mango"]
const array6 = arr.shift();
// console.log(arr)

//unshirt (them 1 phan tu vao dau mang)
const array7 = arr.unshift('Cycle')
// console.log(arr)

//them noi phan tu vao cuoi cung cua magn
const arrayTest =['banana',"apple","mango"]
arrayTest[arrayTest.length] = 'Kiwi'
// console.log(arrayTest)

const bangBoy = ['huy','nam','alex']
const bangGirl = ['Hue','Dao','Ny']
// console.log(bangBoy.concat(bangGirl))

//Splice (them phan tu, loai bo phan tu sau do, phan tu duoc them)
const water =['coca','pepsi','tea','water']
//xoa phan tu tu vi tri 0 , xoa 3 phan tu
// water.splice(0,2)
// console.log(water)

//slice( cat 1 phan cua mang thanh mot mang moi)
const water1 =['coca','pepsi','tea','water']
// console.log(water1.slice(2))
//cat 2 phan tu dau tien va tao ra mang moi co 2 phan tu con lai

// console.log(water1.slice(1,2))
//

// function test(){
//     var name;
//     console.log(name)
//     // console.log(age)
//     name='nam'
//     // const age=16;
// }

// test()

// function test(){
//     for(var i =0 ;i<3;i++){
//         // setTimeout(()=>console.log(i),1)
//         console.log(i)
//         setTimeout(()=>console.log(i),5)
//     }
// }
// test()
