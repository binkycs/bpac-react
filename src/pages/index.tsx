import ExtensionAlert from '../lib/ExtensionAlert';
import { Print, isExtensionInstalled } from '../lib/bpac';
import { BpacAlert } from '../lib/BpacAlert';
import { Button, TextInput } from 'flowbite-react';
import { useState } from 'react';

/*
await setObject(
				objDoc,
				'objDue',
				addMonths(dueMonths).toLocaleDateString()
			);
			await setObject(objDoc, 'objOperator', calibrationOperator);
			await setObject(objDoc, 'objIdReplace', gaugeId);
			(await objDoc.GetObject('objTitle')).HorizontalAlign = 1;
*/

function HomePage() {
	const [extensionInstalled] = useState(isExtensionInstalled());
	const [calibrationOperator, setCalibrationOperator] = useState('');
	const [gaugeId, setGaugeId] = useState('');
	const [dueMonths, setDueMonths] = useState(6);

	function updateDueMonths(e: React.ChangeEvent<HTMLInputElement>) {
		if (e.target.value === '') {
			setDueMonths(undefined);
			return;
		}
		const value = +e.target.value;
		console.log(value % 6);
		if (value % 6 !== 0) {
			setDueMonths(6);
			return;
		}
		console.log('setting');
		setDueMonths(value);
	}
	return (
		<>
			{!extensionInstalled && <ExtensionAlert />}
			<BpacAlert />
			<TextInput
				placeholder="Calibrated by..."
				onChange={(e) => setCalibrationOperator(e.target.value)}
			/>
			<TextInput
				placeholder="Gauge ID..."
				onChange={(e) => setGaugeId(e.target.value)}
			/>
			<TextInput
				type="number"
				step="6"
				min="6"
				value={dueMonths}
				onChange={(e) => updateDueMonths(e)}
			/>
			<Button
				onClick={async () => {
					Print(dueMonths, calibrationOperator, gaugeId);
				}}
			>
				click
			</Button>
		</>
	);
}

export default HomePage;
