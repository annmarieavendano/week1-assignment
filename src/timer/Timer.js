export default class Timer {
  construtor(seconds) {
    this.seconds = seconds;
  }
}

Timer.prototype.start = () => {
  const timerInterval = setInterval(() => {
    if (this.seconds === 0) {
      clearInterval(timerInterval);
    }
    console.log(this.seconds);
    this.seconds -= 1;
  }, 1000);
};
