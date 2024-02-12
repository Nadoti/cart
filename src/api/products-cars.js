import axios from "axios"

export async function getProducts({ name, preco, inclusionDate, order}) {

  const response = await axios.get("http://localhost:3000/products")
  
  let productsCars = response.data


  productsCars = productsCars.filter(product => (
    (!name || product.name.toLowerCase().includes(name.toLowerCase())) &&
    (!preco || product.preco === Number(preco)) &&
    (!inclusionDate || product.dateInclusion === inclusionDate)
  ));

  if (order === 'preco-menor') {
    productsCars.sort((a, b) => b.preco - a.preco);
  } else if (order === 'preco-maior') {
    productsCars.sort((a, b) => a.preco - b.preco);
  } else if (order === 'date') {
    sortByDate(productsCars);
  }

  return productsCars;

}

function sortByDate(productsCars) {
  productsCars.sort((a, b) => {
    const dateA = parseDate(a.dateInclusion);
    const dateB = parseDate(b.dateInclusion);

    return dateA - dateB;
  });
}