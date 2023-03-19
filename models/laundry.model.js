import prisma from '../prisma/init.js';
class Laundry {
	static async getLaundries() {
		try {
			const laundryList = await prisma.laundryList.findUnique({
				where: {
					id: 1,
				},
				include: { laundryNumber: true },
			});
			return laundryList;
		} catch (err) {
			console.log(err);
		}
	}

	static async postLaundry(number, twice) {
		console.log({ number, twice });
		try {
			await prisma.laundryNumber.create({
				data: {
					number: Number(number),
					laundryListId: 1,
					twice: Boolean(twice),
				},
			});
			return await this.getLaundries();
		} catch (err) {
			console.log(err);
		}
	}

	static async deleteLaundry(id) {
		try {
			await prisma.laundryNumber.delete({
				where: { id: Number(id) },
			});
			return await this.getLaundries();
		} catch (err) {
			console.log(err);
		}
	}
}

export default Laundry;
