import { check, validationResult } from 'express-validator';

export const inputValidations = [
  check('name')
    .trim()
    .escape()
    .notEmpty()
    .withMessage('Name is Required')
    .isLength({ min: 3, max: 50 })
    .withMessage('Name must be between 3 and 50 character'),

  check('email')
    .trim()
    .escape()
    .normalizeEmail()
    .notEmpty()
    .withMessage('Email is Required')
    .isEmail()
    .withMessage('Invalid Email Address'),

  check('password')
    .trim()
    .notEmpty()
    .withMessage('Password is Required')
    .isLength({ min: 1 })
    .withMessage('Password must be at least 8 characters'),

  (req, res, next) => {
    const results = validationResult(req);

    results.isEmpty() ? next() : res.status(422).send(results.errors);
  },
];

export const loginValidations = [
    check("email")
      .isEmail()
      .withMessage("Invalid email address!")
      .notEmpty()
      .withMessage("Email is a required field!"),
    check("password")
      .notEmpty()
      .withMessage("Password is a required field!")
      .isLength({ min: 5 })
      .withMessage("Password is to short!"),
    
    (req, res, next) => {
        const results = validationResult(req);
    
        results.isEmpty() ? next() : res.status(422).send(results.errors);
    },  
  ];