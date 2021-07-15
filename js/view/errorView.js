export default val => {
  const markUp = `<div class="error">
                        <span class="error__code">${val.cod}</span>
                        <p class="error__msg">${val.message}</p>
                    </div>
`;

  elements.currentViewBox.insertAdjacentHTML('beforeend', markUp);
};
