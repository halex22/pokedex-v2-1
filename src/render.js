export function render(data) {
  console.log(data)
  const dexContainer = document.getElementById('dex-container');
  dexContainer.innerHTML = '';
  for (const pokemon of data) {
      const pokeContainer = document.createElement("div");
      pokeContainer.classList.add("poke-container");
      pokeContainer.classList.add("pokeball-bg");

      const imgContainer = createImgContainer(pokemon.sprites.front_default)
      const linkedName = createLinkedName(pokemon.name)

      pokeContainer.append(imgContainer, linkedName);
      dexContainer.appendChild(pokeContainer);
  }
}

function createImgContainer(src) {
  const imgContainer = document.createElement('div')

  const pokeImg = document.createElement('img');
  pokeImg.src = src;
  pokeImg.classList.add('poke-img-container')

  imgContainer.appendChild(pokeImg)
  return imgContainer

}

function createLinkedName(name) {
  const container  = document.createElement('div')
  const linkedName = document.createElement('a')
  linkedName.classList.add('pokemon-name')
  linkedName.href = `/detail.html?name=${name}`
  const txt = document.createTextNode(name)
  linkedName.appendChild(txt)
  container.appendChild(linkedName)
  return container
}


