export const makeprofile = (img, name, mobile) => {
  return `<article class="box">
    <div class="left">
      <img src="${img}" alt="" />
    </div>
    <div class="right">
      <span class="name">${name}</span>
      <span class="mobile">${mobile}</span>
    </div>
  </article>
  `;
};
