function validate(data, rules) {
  for (const field in rules) {
    const value = data[field];
    const fieldRules = rules[field].split('|');
    for (const rule of fieldRules) {
      const [validatorName, validatorParam] = rule.split(':');
      const validator = validators[validatorName];
      if (!validator) {
        throw new Error(`No validator with name: ${validatorName}, check the documentation for list of available validators`);
      }
      const isValid = validator(value, validatorParam);
      if (!isValid) {
        return false;
      }
    }
  }
  return true;
}

const validators = {
  required: (value) => {
    return value !== undefined && value !== null && value !== '';
  },
  type: (value) => {
    return typeof value === 'string';
  },
  email: (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  },
  min: (value, param) => {
    const minLength = parseInt(param, 10);
    return typeof value === 'string' && value.length >= minLength;
  },
  max: (value, param) => {
    const maxLength = parseInt(param, 10);
    return typeof value === 'string' && value.length <= maxLength;
  }
};
  
module.exports = validate;