## :rocket: Tecnologias 

Esse projeto foi desenvolvido com as seguintes tecnologias:

-  [Node.js](https://nodejs.org)
-  [Mocha](https://www.npmjs.com/package/mocha)

## :dart: Como foi resolvido o problema

O problema foi resolvido utilizando um objeto com os números romanos correspondentes aos grupos de unidade, dezena, centena e milhar. Onde em um looping, o número informado era divido e analisado caractere por caractere junto com seu tamanho para fazer a busca no grupo numérico correto, retornando o número em romano certo.

O algoritmo irá limpar todos os caracteres que não forem números antes de fazer a conversão.
O número máximo para a conversão é de '3999'.
Foram implementados um total de 15 testes, que ocorrem de forma crescente para simular o algoritmo desde os números menores até números e entradas não aceitas.
 
## :information_source: Como usar

Para clonar e rodar os testes dessa aplicação, vai ser necessário [Git](https://git-scm.com) e [Node.js](https://nodejs.org) instalados no seu computador. 

Para utilizar o conversor de uma forma visual mais simples e prática, é só abrir o index.html. 

Usar as seguintes linhas de comando:

```bash
# Clonar o repositório
$ git clone https://github.com/vinifinger/RomanNumerals.git

# Entre no repositório
$ cd RomanNumerals

# Instale as dependencias
$ npm install

# Rodar testes
$ npm run test
```

## :memo: Licença
Este projeto está sob a licença do MIT.
---

Desenvolvido com ♥ por Vinicius M. Finger :wave: [Linkedin](https://www.linkedin.com/in/vinicius-finger/)