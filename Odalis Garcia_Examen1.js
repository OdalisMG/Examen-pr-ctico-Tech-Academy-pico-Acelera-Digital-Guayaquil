horastrabajadas = 53;
horasextras = 40 - horastrabajadas;
  

if(horas_extras < 0){
  console.log("El total a pagar por hors laborales normal (40hrs) es de: " + 40 * 265);
  console.log("El total a pagar por hors Extras es de: " + (-horasextras * 350));
}else{
  console.log("El total a pagar por hors laborales normal (40hrs) es de: " + horastrabajadas * 265);
}
    
