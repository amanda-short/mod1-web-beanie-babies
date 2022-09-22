export function renderSignOption(sign) {
    const option = document.createElement('option');
    option.value = sign.name;
    option.textContent = sign.name;
    return option;
}

export function renderBeanies(beanies) {
    const li = document.createElement('li');
    li.classList.add('card');

    // const img = document.createElement('img');
    // img.src = `https://flagcdn.com/72x54/${country.iso2.toLowerCase()}.png`;
    // img.alt = country.name;

    const h2 = document.createElement('h2');
    h2.textContent = beanies.name;

    const p = document.createElement('p');
    p.textContent = beanies;

    li.append(h2, img, p);

    return li;
}