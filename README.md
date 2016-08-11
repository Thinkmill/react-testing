# Testing React Applications Examples

This repo showcases how to test various parts of a common React/Redux app using Mocha, `expect` and `enzyme`. You can see a guide using these examples over in the [`react-boilerplate` docs](https://github.com/mxstbr/react-boilerplate/blob/e5eeffb311b82a4a538a4d6e6d7e6a227d3d0ea6/docs/testing/README.md)!

> These are the examples of a talk I held at the Vienna React.js Meetup about "Testing React.js Applications"!

## Setup

1. `git clone git@github.com:mxstbr/react-testing`

2. `cd react-testing`

3. `npm install`

## Structure

```rb

examples/
├── add       # Simple example of a unit test
├── NavBar    # Redux actions and reducer tests
└── Button    # React component tests
```

## Trying the tests

There's a bunch of commands to run different test "classes". The main command is

### Run all tests

Run the entire test suite.

```
$ npm run test
```

### Other commands

- `$ npm run test:function`: Run the pure function tests

- `$ npm run test:actions`: Run the action tests

- `$ npm run test:reducer`: Run the reducer tests

- `$ npm run test:redux`: Run both reducer and action tests

- `$ npm run test:component`: Run the component tests

- `$ npm run test:react`: Run all the redux tests and the component tests

## License

The MIT License (MIT)

Copyright (c) 2016 Maximilian Stoiber

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
