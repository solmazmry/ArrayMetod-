const employees = [
  {
    id: 1,
    name: "Farman",
    age: 22,
    position: "Frontend | Team Leader",
    salary: 250,
  },
  {
    id: 2,
    name: "Subhan",
    age: 22,
    position: "Backend | Team Leader",
    salary: 250,
  },
  {
    id: 3,
    name: "Aqil",
    age: 27,
    position: "QA Tester",
    salary: 70,
  },
  {
    id: 4,
    name: "Lala",
    age: 18,
    position: "QA Tester",
    salary: 70,
  },
  {
    id: 5,
    name: "Oktay",
    age: 12,
    position: "Frontend",
    salary: 160,
  },
];

// 1.Arrayin uzunluğun tapmaq
// let a= employees.length
// console.log(a);

// 2.At funksiyası ilə sonuncu elementin adını tapmaq
// let a=employees.at(employees.length-1)
// console.log(a);

// 3.Length ilə sonuncu elementin adını tapmaq

// let names =employees.at(employees.length-1.)
// console.log(names.name);

// 4.Arrayin sonuna yeni işçi əlavə etmək
//  employees.push({
//     id: 6,
//         name: 'Nuray',
//         age: 15,
//         position: 'Dizayner',
//         salary: 170
// })
// console.log(employees);

// 5.Arrayin əvvəlinə yeni işçi əlavə etmək
// employees.unshift({
//     id: 7,
//         name: 'Seymur',
//         age: 19,
//         position: 'Dizayner',
//         salary: 170
// })
// console.log(employees);

// 6.Arrayin sonundan işçi silmək
//  let a = employees.pop ()
// console.log(employees);

// 7.Arrayin əvvəlindəb işçi silmək
// let a = employees.shift ()
// console.log(employees);

// 8.İşçilərin adlarını join ilə yazdırmaq (Çətin).
// let names= employees.map((namess,index)=>{
//    return namess.name
// }
// )
// let format= names.join()
// console.log(format);

// 9.Arrayi tərsinə yazdırmaq
// let a = employees.reverse()
// console.log(a);

// 10.İşçilərin içində vəzifəsi Frontend olan varmı(includes methodu ilə)

// let format= employees.map((positions,index)=>
//   positions.position

// )
// console.log(format.includes("Frontend"));

// 11.İşçilərin içində vəzifəsi Frontend olan varmı(some methodu ilə)
// let format = employees.some((item)=> item.position =="Frontend")
// console.log(format);

// 12.Bütün işçilərin yaşı 18dən böyükdürmü
// let format = employees.every((item)=> item.age>18)
// console.log(format);

// 13.Vəzifəsi Frontend | Team Leader olan işçinin indexini tapmaq
// let format =employees.findIndex((index)=>index='Frontend | Team Leader')

// console.log(format);

// 14.Vəzifəsi Frontend | Team Leader olan işçinin özünü tapmaq
// let format =employees.find((index)=>index='Frontend | Team Leader')

// console.log(format.name);

// 15.Yaşı 18dən böyük olan işçiləri göstərmək
// let format = employees.filter((index,item)=>index.age>18)

// console.log(format);

// 16.İşçilərin maaşlarının cəmin hesablamaq

// let sam = employees.reduce((item, index) => item + index.salary, 0);

// console.log(sam);
