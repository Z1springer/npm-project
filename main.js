import lodash from "lodash";
import chalk from "chalk";
import colors from "colors";

const array = [
  1, 1, 3, 4, 5, 6, 6, 7, 8, 9, 10, 12, 13, 14, 15, 15, 16, 17, 18, 19, 20,
];

const uniqueNums = lodash.uniq(array);

console.log(uniqueNums);

console.log(chalk.blueBright("A Colourful Hello from Chalk!"));

console.log(colors.america("USA!!!"));
