#!/usr/bin/node

number = parseInt(process.argv[2]);
if (!Number.isNaN(number)) {
  console.log(`My number: ${process.argv[2]}`);
} else {
  console.log('Not a number');
}
