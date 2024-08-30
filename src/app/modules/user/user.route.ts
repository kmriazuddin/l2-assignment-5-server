import express from 'express';
import { validateRequest } from '../../middleware/validateRequest';
import { UserValidation } from './user.validaton';
import { UserControllers } from './user.controller';
import { authValidation } from '../auth/auth.validation';
import { authController } from '../auth/auth.controller';

const router = express.Router();

router.post(
  '/signup',
  validateRequest(UserValidation.userValidationSchema),
  UserControllers.createUser,
);

router.post(
  '/login',
  validateRequest(authValidation.loginValidationSchema),
  authController.loginUser,
);

router.get('/:email', UserControllers.getSingleUserByEmail);

export const userRoute = router;
