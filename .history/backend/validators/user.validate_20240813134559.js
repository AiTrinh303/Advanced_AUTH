import { check, validationResult } from 'express-validator';

export const validateInput = [
  check('name')
    .notEmpty()
    .withMessage('Name is Required')
    .isLength({ min: 3, max: 50 })
    .withMessage('Name must be between 3 and 50 character'),

  check('email')
    .notEmpty()
    .withMessage('Email is Required')
    .isEmail()
    .withMessage('Invalid Email Address'),

  check('password')
    .notEmpty()
    .withMessage('Password is Required')
    .isLength({ min: 1 })
    .withMessage('Password must be at least 8 characters'),

  (req, res, next) => {
    const results = validationResult(req);

    results.isEmpty() ? next() : res.status(422).send(results.errors);
  },
];
