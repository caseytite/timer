let args = process.argv.slice(2);

// console.log(args);

const timer = function (args) {
  args.forEach((element) => {
    if (typeof +element === "number" && +element >= 1) {
      let each = element * 1000;
      setTimeout(() => {
        process.stdout.write("beep");
        // process.stdout.write("\x07");
        return;
      }, each);
    }
  });
};

timer(args);
