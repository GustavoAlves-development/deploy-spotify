import React from "react";

const App2 = () => {
  return <div>App2v</div>;
};

export default App2;

// rafce

// Arrow Function
//  const App2 = () => <h1>Olá, Mundo ! <h1>;

//Nomeação de Componente
// PascalCase = Letra maiscula quando convem

//Nomeação de Variavel, Função...
//camelCase = Não começa com letra maiuscula, ex = livroDeRomace

//Export default, posso importar com qualaque nome e sem
//Export "sem default", só posso importar entre chaves e com o nome exportado

//Self closing tag
//<Header></Header> ou <Header />

//Para colocar javaScript em HTML, basta colocar a variavel entre {}

//Nomeação de classes em CSS
//Metodologia BEM Blocks, Elements, Modifiers
//bloco__elemento--modificador
//header__link
//header__link--small
//Nomes compostos sao separados por -

//tag vazia em react se chama fragmento

//Componentes recebem props

// {items === 5 ? (
//   <>
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//   </>
// ) : (
//   <>
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//     <SingleItem />
//   </>
// )}

// {Array(items)
//   .fill()
//   .map((currentValue, index) => (
//     <SingleItem key={`${title}-${index}`} />
//   ))}

//Spread operator = ...

// Quando componentes se reenderizam ?
//Uma das ocasiões é quando uma variavel de estado usada por esse componente é atualizada
// Hook - useState
