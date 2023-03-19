import { Router } from 'express';
import {
	getLaundry,
	postLaundry,
	deleteLaundry,
} from '../controllers/laundries.controller.js';
const laundryRouter = new Router();
laundryRouter.post('/', postLaundry);
laundryRouter.get('/', getLaundry);
laundryRouter.delete('/', deleteLaundry);
export default laundryRouter;
