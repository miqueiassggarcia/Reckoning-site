// fetch de get
// fetch('http://localhost:3333/imagem')
//   .then(response => response.json())
//   .then(data => data.forEach(element => {
//     console.log(element)
//   }))
//   .catch(function (error) {
//     console.log(error);
// });




// fetch de get mais simples
// fetch('http://localhost:3333/imagem')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(function (error) {
//     console.log(error);
// });




// fetch de post armazenando dados em uma variável pelo próprio fetch
// let imagem;
// fetch("http://localhost:3333/imagem", {
//     method: "POST",
//     body: JSON.stringify({
//         imagem: "jogo.com"
//     }),
//     headers: {
//         'Content-Type': 'application/json',
//     },
// })
// .then(response => response.json())
// .then(json => {imagem = json})
// .then(() => {console.log(imagem)})




// fetch de post armazenando em uma variável usando async await
// async function foo() {
//     let obj;
  
//     const res = await fetch("http://localhost:3333/imagem", {
//         method: "POST",
//         body: JSON.stringify({
//             imagem: "jogo.com"
//         }),
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     })
  
//     obj = await res.json();
  
//     console.log(obj)

//     return obj;
// }
  
// foo()




// fetch de put
// fetch("http://localhost:3333/imagem/e6a0b51e-2326-4c3d-86c9-76d5f796ef65", {
//     method: "PUT",
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         imagem: "jooogo.com"
//     }),
// })
// .then(response => response.json())
// .then(json => console.log(json));




// fetch de delete
// fetch("http://localhost:3333/imagem/e6a0b51e-2326-4c3d-86c9-76d5f796ef65", {
//     method: "DELETE",
// })
// .then(response => response.json())
// .then(json => console.log(json));