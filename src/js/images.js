function importAll(r) {
  return r.keys().map(r);
}
export default function initializeImages() {
  const images = importAll(require.context('../pic', false, /\.(png|jpe?g|gif|svg)$/));

  const cards = document.body.querySelector('.cards');
  const container = document.createElement('div');
  container.classList.add('image-container');
  cards.appendChild(container);

  images.forEach((imagePath) => {
    const img = document.createElement('img');
    img.src = imagePath;
    const imageName = imagePath.match(/\/([^/]+)\.(png|jpe?g|gif|svg)$/)[1];
    img.classList.add(imageName.toLowerCase());
    img.style.cssText = 'width: 25px; height: auto;';
    container.appendChild(img);
  });
}
