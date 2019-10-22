let counter = 0;
let list1 = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|","\n"];
list1.forEach(x => {
  setTimeout(() => {
    process.stdout.write('\r' + x + '   ');
  }, counter);
  counter += 200;
});


