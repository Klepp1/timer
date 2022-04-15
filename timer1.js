const timer = () => {
  const command = process.argv;
  command.splice(0, 2);
  command.sort((a,b) => {
    return a - b;
  });
  for (const index of command) {
    if (index >= 0 && index !== isNaN) {
      setTimeout(() => {
        process.stdout.write('\x07');
      }, index * 1000);
    }
  }
};
timer();