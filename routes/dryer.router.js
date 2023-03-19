import { Router } from 'express';
import {
	getDryers,
	postDryer,
	deleteDryer,
} from '../controllers/dryers.controller.js';
const dryerRouter = new Router();
dryerRouter.post('/', postDryer);
dryerRouter.get('/', getDryers);
dryerRouter.delete('/', deleteDryer);

export default dryerRouter;
