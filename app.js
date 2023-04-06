const stepper = document.querySelector('.stepper');
const line = document.querySelector('.line');
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');

nextBtn.addEventListener('click', () => {
  moveStep(1);
});

prevBtn.addEventListener('click', () => {
  moveStep(-1);
});

function moveStep(direction) {
  const currentStep = stepper.querySelector('.active');
  const currentIndex = Array.from(stepper.children).indexOf(currentStep);
  const nextIndex = currentIndex + direction;

  if (nextIndex >= 0 && nextIndex < stepper.children.length) {
    currentStep.classList.remove('active');
    const nextStep = stepper.children[nextIndex];
    nextStep.classList.add('active');

    const lineWidth = (100 / (stepper.children.length - 1)) * nextIndex;
    line.style.width = lineWidth + '%';

    if (nextIndex === stepper.children.length - 1) {
      nextBtn.disabled = true;
    } else {
      nextBtn.disabled = false;
    }

    if (nextIndex === 0) {
      prevBtn.disabled = true;
    } else {
      prevBtn.disabled = false;
    }
  }
}
