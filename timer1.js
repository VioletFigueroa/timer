const timer = (args) => {
  const arr = args
    .map((arg) => parseInt(arg))
    .filter((arg) => arg !== NaN && arg >= 0);
  console.log(arr);
  if (arr.length > 0) {
    for (let time of arr) {
      setTimeout(() => {
        process.stdout.write('\x07');
        process.stdout.write(". \n");
      }, time * 1000);
    }
  }
};
timer(process.argv.slice(2));
