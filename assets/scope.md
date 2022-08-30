# Scope

*Escopo determina a visibilidade de alguma variável no JS

# Block statement
```Js
//vamos iniciar um bloco
{
  //aqui dentro é um bloco e posso colocar qualquer código 
} //aqui fechamos o bloco
```

O bloco, também criará um novo escopo. Chamamos de `block-scoped`

## var 
```js 
// var é global e poderá funcionar fora de um escopo de bloco
console.log('> existe x antes de bloco?')

{
  var x = 0
}

console.log ('> existe x depois do bloco? ', x)

*** Exemplo:

//var é global e, também local
// hoisting - Interessante para se pesquisar
console.log('> existe x antes de bloco?', x)

{
  var x = 0
}

console.log ('> existe x depois do bloco? ', x)

// > existe x antes de bloco? undefined
// > existe x depois do bloco?  0
```