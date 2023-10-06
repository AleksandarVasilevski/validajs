# Valida-js

![License](https://img.shields.io/badge/license-MIT-blue.svg)

## Description

Valida-js is a lightweight and flexible validation library for JavaScript, designed to validate various data types and structures.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Validators](#validators)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Installation

To install the library, you can use npm:

```bash
npm install @aleksandarvasilevski/valida-js
```

## Usage

```javascript
const { validate } = require('@aleksandarvasilevski/valida-js');

const validationData = {
  username: 'john',
  email: 'john@mail.com',
  password: '123456',
};

const validationRules = {
  username: 'required|type|min:3|max:20',
  email: 'required|email',
  password: 'required|type|min:6',
};

validate(validationData, validationRules);
```

## Validators

The library provides the following built-in validators:

- **required:** Checks if a value is present and not empty.
- **type:** Validates the type of the value (e.g., string, number, array).
- **email:** Validates the value as an email address.
- **min:** Validates the minimum length for strings or minimum value for numbers.
- **max:** Validates the maximum length for strings or maximum value for numbers.

## Examples

You can find more examples and use cases in the [examples](examples) directory.

## Contributing

Contributions are welcome! See the [Contributing Guidelines](CONTRIBUTING.md) for more details.

## License

This project is licensed under the [MIT License](LICENSE).