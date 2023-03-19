import Laundry from '../models/laundry.model.js';

export const getLaundry = async (req, res) => {
	const laundryList = await Laundry.getLaundries();
	res.status(200).send({ laundryList: laundryList?.laundryNumber });
};
export const postLaundry = async (req, res) => {
	console.log(req.body);
	const obj = req.body;
	const { number, twice } = obj;
	const laundryList = await Laundry.postLaundry(number, twice);
	res.status(200).send({ laundryList: laundryList?.laundryNumber });
};
export const deleteLaundry = async (req, res) => {
	const { id } = req.query;
	const laundryList = await Laundry.deleteLaundry(id);
	res.status(200).send({ laundryList: laundryList?.laundryNumber });
};
