import readline from "readline";
import { transUm } from "./umjunsik";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

main();

function main() {
  console.log("\"엄준식 밈 텍스트 변환기\"\nOnly ASCII English");
  rl.setPrompt("> ");
  rl.prompt();
  rl.on("line", (line) => {
    console.log(transUm(line));
    rl.close();
  });

  rl.on('close', () => {
    process.exit();
  })
}