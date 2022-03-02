alert('Actualmente el menú es '+listFood);
alert('Dejanos tu opinion sobre que le falta y lo agregaremos!');
let comidaOpinion=prompt('Decinos que plato quieras agregar');
listFood.push(comidaOpinion);
alert('Ahora el menú de mañana será '+ listFood);