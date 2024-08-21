function findTheOldest(personas){
    let mayorEdad = " ";
    let edadmasgrande = 0;
    personas.forEach(element => {
        if((element.yearOfDeath-element.yearOfBirth) > edadmasgrande){
            edadmasgrande = element.yearOfDeath-element.yearOfBirth;
            mayorEdad = element.name;
        }
    });
    console.log(mayorEdad);
    return mayorEdad;
}

const people = [
    {
          name: "Carly",
          yearOfBirth: 1942,
          yearOfDeath: 1970,
        },
    {
          name: "Ray",
          yearOfBirth: 1962,
          yearOfDeath: 2011,
        },
    {
          name: "Jane",
          yearOfBirth: 1912,
          yearOfDeath: 1941,
        },
    {
            name: "Julio",
            yearOfBirth: 1920,
            yearOfDeath: 1988,
        },
    {
            name: "María",
            yearOfBirth: 1930,
            yearOfDeath: 1960,
        }
    ];

findTheOldest(people);
  