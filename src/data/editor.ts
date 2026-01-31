export const jsPlaceholder = `// JavaScript Example
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("World");`

export const tsPlaceholder = `// TypeScript Example
interface User {
  id: number;
  name: string;
}

function greet(user: User): void {
  console.log(\`Hello, \${user.name}!\`);
}

greet({ id: 1, name: "World" });`

export const jsonPlaceholder = JSON.stringify(
  {
    message: 'Hello, world!',
    count: 1,
    items: ['a', 'b', 'c'],
  },
  null,
  2,
)

export const phpPlaceholder = `<?php
// PHP Example
function greet($name) {
  echo "Hello, " . $name . "!";
}

greet("World");
?>`

export const cssPlaceholder = `/* CSS Example */
body {
  font-family: Arial, sans-serif;
  background: #f5f5f5;
}

.button {
  padding: 10px 14px;
  background: black;
  color: white;
  border-radius: 6px;
}`

export const scssPlaceholder = `// SCSS Example
$primary: #4a90e2;

body {
  font-family: Arial, sans-serif;
  background: lighten($primary, 40%);

  .button {
    padding: 10px 14px;
    background: $primary;
    color: white;
    border-radius: 6px;

    &:hover {
      background: darken($primary, 10%);
    }
  }
}`
