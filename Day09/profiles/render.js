export const makeCard = (name, job_title, image) => {
  return `
    <div class="card">
      <img src="${image}" alt="" />
    </div>
    <div "list">
      <strong>${name}</strong>
      <span>${job_title}</span>
    </div>
    `;
};
