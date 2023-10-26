import { IDocument, IsExtensionInstalled } from './bpac/sdk';

export const Print = async (
	dueMonths: number,
	calibrationOperator: string,
	gaugeId: string,
	labelPath: string
) => {
	try {
		const objDoc = IDocument;
		const ret = await objDoc.Open('https://label.ibanks.dev/' + labelPath);
		// most of the functions from the SDK return true/false for success
		if (ret === true) {
			// Set the data in a barcode/QR code inside your template file

			await setObject(objDoc, 'objToday', new Date().toLocaleDateString());
			await setObject(
				objDoc,
				'objDue',
				addMonths(dueMonths).toLocaleDateString()
			);
			await setObject(objDoc, 'objOperator', calibrationOperator);
			await setObject(objDoc, 'objIdReplace', gaugeId);
			(await objDoc.GetObject('objTitle')).HorizontalAlign = 1;

			// Start the print
			await objDoc.StartPrint('', 0);
			await objDoc.PrintOut(1, 0);
			await objDoc.EndPrint();
			await objDoc.Close();
		}
	} catch (err) {
		console.log(err);
	}
};

function addMonths(months: number) {
	const date = new Date();
	return new Date(date.setMonth(date.getMonth() + months));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function setObject(doc: any, objName: string, value: string | number) {
	(await doc.GetObject(objName)).Text = value;
}

export function isExtensionInstalled() {
	return IsExtensionInstalled();
}
