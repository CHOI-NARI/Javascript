export const makeList = (image, name, color, hex_color, money, mobile) => {
  return `
      <div class="boxOne">
        <img src="${image}" alt="" />
      </div>
      <div class="boxTwo">
        <span class="name">${name}</span>
        <span class="color">${color}</span>
        <span class="hex_color">${hex_color}</span>
        <span class="money">${money}</span>
        <span class="mobile">${mobile}</span>
      </div>
      `;
};
