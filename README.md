# uplord-ui

A simple and easy-to-use React UI component library.

## Installation

Install the package via npm:

```bash
npm i uplord-ui
```

or with yarn:

```bash
yarn add uplord-ui
```

## Usage

### 1. Include the CSS

Import the CSS file in your `layout.tsx` (or main layout/component file) to apply the default styles:

```ts
import 'uplord-ui/dist/index.css';
```

### 2. Import Components

You can now import and use components from `uplord-ui`:

```ts
import { Button } from 'uplord-ui';

export default function Example() {
  return (
    <div>
      <Button>Click Me</Button>
    </div>
  );
}
```

## Available Components

- `Accordion`
- `Alert`
- `Button`
- `Calendar`
- `Card`
- `Checkbox`
- `CodeDisplay`
- `CodeEditor`
- `Contribution`
- `FormikInput`
- `Icon`
- `Input`
- `InputOtp`
- `Modal`
- `NotFound`
- `Pagination`
- `Radio`
- `Range`
- `RangeMulti`
- `Rating`
- `Select`
- `Stack`
- `Table`
- `Tabs`
- `Textarea`
- `Toast`

## License

MIT License

Copyright (c) 2026 Uplord

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
