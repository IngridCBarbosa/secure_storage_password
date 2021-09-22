const bcrypt = require("bcrypt");

const saltRounds = 10;
const password = "istoÉumaSenha";

var hashPasswordOnde;


// FORMA 1 DE FAZER

bcrypt.genSalt(saltRounds, function (err, salt) {
  bcrypt.hash(password, saltRounds, function (err, hash) {
    console.log(`Hash gerado ${hash}`);
    hashPasswordOnde = hash;

    wrongPassword = "Jumenta";
    bcrypt.compare(password, hashPasswordOnde, function (err, result) {
      if (result) {
        console.log("Senha correta");
      } else {
        console.log(`Hash resultado da senha ${result}`);
        console.log("Se deu mal!! Digite a senha novamente");
      }
    });
    console.log(`After functions ${password}, ${hashPasswordOnde}`);
  });

});



// DEIXANDO O CÓDIGO MAIS LIMPO e SIMPLES

const password2 = 'SimboraDesenvolver';

const generatedSalt = bcrypt.genSaltSync(saltRounds);
const generatedHash = bcrypt.hashSync(password2, generatedSalt);

const resultComparation = bcrypt.compareSync('SenhaAleatoria',generatedHash);


console.log(resultComparation ? 'Senha Correta' : 'Senha incorreta');



