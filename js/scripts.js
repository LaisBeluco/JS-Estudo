//var é global e, também local
// hoisting
console.log('> existe x antes de bloco?', x)

{
  var x = 0
}

console.log ('> existe x depois do bloco? ', x)

// > existe x antes de bloco? undefined
// > existe x depois do bloco?  0