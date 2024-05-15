const skills = {
  comunicacao: null,
  lideranca: null,
};

const progressBar = (value, skill) => {
  let check_progress = document.querySelectorAll(`.${skill}`);

  skills[skill] = value;

  for (let checkbox of check_progress) {
    checkbox.checked = false;
  }

  for (let checkbox of check_progress) {
    if (checkbox.value <= value) {
      checkbox.checked = true;
    }
  }

  let bar_progress = document.querySelector(`.progress-${skill}`);

  console.log(skills);

  bar_progress.style.width = `calc((100%/6)*${value})`;
};
