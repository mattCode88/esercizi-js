/*dato un array multidimensionale a, creare un singolo array b con tutti i valori numerici 
contenuti in a  */

let a = [
    10,
    [20,30],
    40,
    [50,60,[70,90]],
    100
];

let b = [];

a.forEach(element => {
    if(Array.isArray(element)){
        element.forEach(el => {
            if(!Array.isArray(el)){
                b.push(el);
            }else{
                el.forEach(elem => {
                    b.push(elem);
                });
            }
        });
    }else{
        b.push(element);
    }
});

console.log(b);