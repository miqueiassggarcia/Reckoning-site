// fetch('http://localhost:3333/imagem')
//   .then(response => response.json())
//   .then(data => data.forEach(element => {
//     console.log(element)
//   }))
//   .catch(function (error) {
//     console.log(error);
// });

fetch('http://localhost:3333/imagem')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(function (error) {
    console.log(error);
});


fetch("http://localhost:3333/imagem", {
    method: "POST",
    body: JSON.stringify({
        imagem: "jogo.com"
    }),
    headers: {
        'Content-Type': 'application/json',
    },
})
.then(response => response.json())
.then(json => console.log(json));


fetch("http://localhost:3333/imagem/e6a0b51e-2326-4c3d-86c9-76d5f796ef65", {
    method: "PUT",
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        imagem: "jooogo.com"
    }),
})
.then(response => response.json())
.then(json => console.log(json));


fetch("http://localhost:3333/imagem/e6a0b51e-2326-4c3d-86c9-76d5f796ef65", {
    method: "DELETE",
})
.then(response => response.json())
.then(json => console.log(json));