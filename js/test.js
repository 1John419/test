let body = document.querySelector('body');

body.addEventListener('click', (event) => {
  bodyClick(event);
});

const bodyClick = (event) => {
  event.preventDefault();
  if (!document.getSelection().toString()) {
    let paragraph = event.target.closest('p');
    if (paragraph) {
      paragraphClick(paragraph);
    }
  }
}

const paragraphClick = (paragraph) => {
  navigator.clipboard.writeText(paragraph.innerHTML).then(
    () => {
      console('done');
    },
    () => {
      console.log('error');
    }
  );
}
