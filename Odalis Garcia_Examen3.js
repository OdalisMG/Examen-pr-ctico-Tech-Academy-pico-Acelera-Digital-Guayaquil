matrz1 = [3, 2, 1, 1, 2, 3, 2, 3, 1]
matrz2 = [1, 1, 2, 2, 1, 1, 1, 2, 1]

console.log("Arreglo 1: ", matrz1 )
console.log("--------------------------")


console.log("Arreglo 2: ", matrz2 )
console.log("--------------------------")


for (let i in matrz1){
  console.log(matrz1[i] + " + " + matrz2[i] + " = " + (matrz1[i]+matrz2[i]))
  console.log(matrz1[i] + " * " + matrz2[i] + " = " + (matrz1[i]*matrz2[i]))
  console.log("--------------------------")
}

  