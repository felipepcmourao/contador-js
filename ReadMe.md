# Projeto de Contador com JavaScript
Desafio do Bootcamp de JavaScript da DIO!

## Objetivos
- Criar um componente dinâmico
- Uso de eventos

## Processo

### Versão 1
A versão 1 foi criada seguindo os passos da @[stebsnusch](https://github.com/stebsnusch) no bootcamp da DIO de JavaScript. Ao final da aula ela nos deu os seguintes desafios para fazermos por conta própria:

1. Tente implementar os eventos usando o método `addEventListener`.
2. Crie condicionais que desabilitam o botão de incrementar ou decrementar quando count chegar a um determinado valor (ex.: 0 <= count =< 10).
3. Mude a cor do texto em `CURRENT_NUMBER` para vermelho quando o número for negativo.

Esses desafios foram aplicados na versão 2 e versão 3.

### Versão 2
A versão 2 teve como objetivo completar os itens 1 e 2 do desafio proposto.

Para solucionar o primeiro desafio, com ajuda da plataforma [W3Schools](https://www.w3schools.com/jsref/met_element_addeventlistener.asp) eu preparei o código adaptado ao contador que criamos.

```
const minusSymbol = document.getElementById ("minus");
minusSymbol.addEventListener("click", decrement);

const plusSymbol = document.getElementById ("plus");
plusSymbol.addEventListener("click", increment);

let result = 0;

function decrement() {
        result = result - 1;
        document.getElementById ("currentNumber").innerHTML = result;
}

function increment() {
        result = result + 1;
        document.getElementById ("currentNumber").innerHTML = result;
}
```

No entanto, ainda faltava criar a condicional para que o botão só ativasse a função se o número aparecendo estivesse entre 0 a 10. Então, utilizei a condicional `if` para isso.

```
const minusSymbol = document.getElementById ("minus");
minusSymbol.addEventListener("click", decrement);

const plusSymbol = document.getElementById ("plus");
plusSymbol.addEventListener("click", increment);

let result = 0;

function decrement() {
    if (result >= 1) {
        result = result - 1;
        document.getElementById ("currentNumber").innerHTML = result;
    }
}

function increment() {
    if (result <=9) {
        result = result + 1;
        document.getElementById ("currentNumber").innerHTML = result;
    }
}

```

E assim ficou o código JavaScript completo na **versão 2**.

### Versão 3

Para a versão 3, o desafio era deixar os números negativos em vermelho e os positivos em preto.

Para isso utilizei a propriedade `classList` e o método `add()` para alterar a classe do número aparecendo se ele fosse positivo ou negativo por meio da condicional `if`.

```
function decrement() {
        result = result - 1;
        if (result < 0) {
            number.classList.remove('positive');
            number.classList.add('negative');
            document.getElementById ("currentNumber").innerHTML = result;
        }
        else {
            document.getElementById ("currentNumber").innerHTML = result;
        }
}

function increment() {
        result = result + 1;
        if (result >= 0) {
            number.classList.remove('negative');
            number.classList.add('positive');
            document.getElementById ("currentNumber").innerHTML = result;
        }
        else {
            document.getElementById ("currentNumber").innerHTML = result;
        }
}
```

Por fim, para alterar a cor das novas classes, as adicionei ao arquivo CSS e defini preto para positivo e vermelho para negativo.

```
.positive {
    color: black;
}

.negative {
    color: red;
}
```

### Aceito Sugestões
Fiz da forma que o meu conhecimento atual me permitiu e continuarei praticando para estar cada vez melhor. Se você tiver uma sugestão ou dica de como eu poderia ter feito, fico feliz em ter um pouco do seu *insight*. Obrigado! 🤩