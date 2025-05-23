

url = "https://fakestoreapi.com/products";

fetch(url)
.then(response => response.json())
.then(data => {
  const tableBody = document.getElementById('produtoTabela');

  for (let i = 0; i <10; i++) {
    const product = data[i];
    const row = `
    <tr>
      <td>${product.id}</td>
      <td><img src="${product.image}" alt="${product.title}" style="width: 50px;"></td>
      <td>${product.title}</td>
      <td>${product.category}</td>
      <td>R$ ${product.price.toFixed(2)}</td>
      <td>${product.description}</td>
      <td>${product.rating.rate} (${product.rating.count})</td>
    </tr>
  `;

  tableBody.innerHTML += row;
  }
})

.catch(erro => {
  console.error('Erro ao buscar dados:', error);
});

