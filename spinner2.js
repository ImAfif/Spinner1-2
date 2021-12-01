process.stdout.write("hello from spinner1.js... \rheyyy\n");

spinner = [
  "\r|   ",
  "\r/   ",
  "\r-   ",
  "\r|   ",
  "\r-    ",
  "\r\\   ",
  "\r|   ",
];
let delay = 0;
for (const element of spinner) {
  setTimeout(() => {
    process.stdout.write(element, delay++);
  }, (delay = delay + 500));
}

// const sentence = "Test One Two Three" + "\n";
// let delay = 0;
// for (const char of sentence) {
//   setTimeout(() => {
//     process.stdout.write(char, delay++);
//   }, (delay = delay + 50));
// }
