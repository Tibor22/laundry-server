import prisma from '../prisma/init.js';

class Dryer {
	static async getDryers() {
		try {
			const dryerList = await prisma.dryerList.findUnique({
				where: {
					id: 1,
				},
				include: { dryerNumber: true },
			});
			return dryerList;
		} catch (err) {
			console.log(err);
		}
	}

	static async postDryer(number, twice) {
		try {
			await prisma.dryerNumber.create({
				data: {
					number: Number(number),
					dryerListId: 1,
					twice: Boolean(twice),
				},
			});
			return this.getDryers();
		} catch (e) {
			console.log(error);
		}
	}

	static async deleteDryer(id) {
		console.log('DRYER:', id);
		try {
			await prisma.dryerNumber.delete({
				where: { id: Number(id) },
			});
			return this.getDryers();
		} catch (err) {
			console.log(err);
		}
	}
}

export default Dryer;
