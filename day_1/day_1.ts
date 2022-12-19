let elves: string | number[] = await Deno.readTextFile("input.txt");

elves = elves.split('\n\n').map((elf) => {

  return elf.split('\n').reduce((accum, currvalue) => {

    return (Number(accum) + Number(currvalue));

  }, 0)

}).sort((a, b) => b - a);

console.log(`Highest: ${elves[0]}\nSecond Highest: ${elves[1]}\nThird Highest: ${elves[2]}`);
console.log(`Total calories carried by the top 3 elves ${elves[0] + elves[1] + elves[2]}`);