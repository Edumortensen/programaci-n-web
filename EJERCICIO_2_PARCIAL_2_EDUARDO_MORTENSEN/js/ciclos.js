//ciclos 

//for
const heroes = ["BATMAN", "SPIDEMAN", "BANANA", "APPLEBOY"];
for (let i = 0; i < heroes.length; i++) {
    console.warn(heroes[i]);
}

console.warn("--------------------------");
for (let i  in heroes) {
        console.warn(heroes[i]);
    }

console.warn("--------------------------");
for (let heroe  in heroes) {
        console.warn(heroe);
    }

for(let contador = 0;contador<10;contador++){
    if(contador % 2!=0){
        continue;
    }
    console.log(contador)
}
const carros=["ADS","MAZDA","HONDA","FORD"]
for(let contador = 0;contador<carros.length;contador++){
    if(contador ==3){
        continue;
    }
    console.log(carros[contador]);

}

let i=0;
while(carros[i]){
    if(i==1)
    {
        i++;
        break;
    }
}