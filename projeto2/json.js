// Primeira forma de fazer o parsing de JSON para usar no javascript
var jsonText = JSON.parse('{"nome":"Clecio Ferreira","idade":33}');
//alert("Ola "+jsonText.nome+"! Você tem "+jsonText.idade+" anos. Parabéns!!");

// Segunda forma de fazer o parsing de JSON para usar no javascript
var textoJson = '{"nome":"Clecio Ferreira","idade":33}';
var carros = '[{"modelo":"Renegade PCD","marca":"JEEP","ano":2019},{"modelo":"Civic","marca":"Honda","ano":2017}]';
var txt = JSON.parse(textoJson);
//var car = JSON.parse(carros);
var car = JSON.parse(carrosJS);
var mot = JSON.parse(motoJS);
//alert("Ola "+txt.nome+"! Você tem "+txt.idade+" anos. Parabéns!!");
//alert("Modelo =>"+car[0].modelo+" | Marca => "+car[0].marca+" | Ano =>"+car[0].ano);
alert("Modelo =>"+mot.modelo+" | Marca => "+mot.marca+" | Ano =>"+mot.ano+" | Cilindrada =>"+mot.cc);
