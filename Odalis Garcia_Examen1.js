horas_trabajadas = 53;
horas_extras = 40 - horas_trabajadas;
  

if(horas_extras < 0){
  console.log("El total a pagar por hors laborales normal (40hrs) es de: " + 40 * 265);
  console.log("El total a pagar por hors Extras es de: " + (-horas_extras * 350));
}else{
  console.log("El total a pagar por hors laborales normal (40hrs) es de: " + horas_trabajadas * 265);
}
    
