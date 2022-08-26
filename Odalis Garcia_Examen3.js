mtrz1 = [3, 2, 1, 1, 2, 3, 2, 3, 1]
mtrz2 = [1, 1, 2, 2, 1, 1, 1, 2, 1]

console.log("Arreglo 1: ", mtrz1 )
console.log("--------------------------")


console.log("Arreglo 2: ", mtrz2 )
console.log("--------------------------")


for (let i in mtrz1){
  console.log(mtrz1[i] + " + " + mtrz2[i] + " = " + (mtrz1[i]+mtrz2[i]))
  console.log(mtrz1[i] + " * " + mtrz2[i] + " = " + (mtrz1[i]*mtrz2[i]))
  console.log("--------------------------")
}

  