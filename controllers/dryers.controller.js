import Dryer from '../models/dryer.model.js';

export const getDryers = async (req, res) => {
	const dryerList = await Dryer.getDryers();
	res.status(200).send({ dryerList: dryerList?.dryerNumber });
};
export const postDryer = async (req, res) => {
	const obj = req.body;
	const { number, twice } = obj;
	const dryerList = await Dryer.postDryer(number, twice);
	res.status(201).send({ dryerList: dryerList?.dryerNumber });
};
export const deleteDryer = async (req, res) => {
	const { id } = req.query;
	const dryerList = await Dryer.deleteDryer(id);
	res.status(200).send({ dryerList: dryerList?.dryerNumber });
};
