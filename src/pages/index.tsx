import ExtensionAlert from '../lib/ExtensionAlert';
import { Print } from '../lib/bpac';
import { BpacAlert } from '../lib/BpacAlert';
import { Alert, Button, Label, Select, TextInput } from 'flowbite-react';
import { useState } from 'react';
import { BiError } from 'react-icons/bi';

function HomePage() {
	const [calibrationOperator, setCalibrationOperator] = useState('');
	const [gaugeId, setGaugeId] = useState('');
	const [dueMonths, setDueMonths] = useState<number>(undefined);
	const [labelType, setLabelType] = useState('label-sm.lbx');

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
	const [isFormFailed, setFormFailed] = useState(false);
	return (
		<>
			<BpacAlert />
			{<ExtensionAlert />}
			{isFormFailed && (
				<Alert color='red' icon={BiError}>
					Something went wrong. Check the form and try again.
				</Alert>
			)}
			<div>
				<Label>Label Size</Label>
				<Select onChange={(e) => setLabelType(e.target.value)}>
					<option value='label-sm.lbx'>Small</option>
					<option value='label-lg.lbx'>Large</option>
				</Select>
			</div>
			<div>
				<Label>Calibration Operator</Label>
				<TextInput
					placeholder='Calibrated by...'
					onChange={(e) => setCalibrationOperator(e.target.value)}
				/>
			</div>
			<div>
				<Label>Gauge ID</Label>
				<TextInput
					placeholder='Gauge ID...'
					onChange={(e) => setGaugeId(e.target.value)}
				/>
			</div>
			<div>
				<Label>Calibration Due Date</Label>
				<TextInput
					type='number'
					step='6'
					min='6'
					value={dueMonths}
					placeholder='Due in (months)...'
					onChange={(e) => updateDueMonths(e)}
				/>
			</div>
			<Button
				className='w-full'
				onClick={async () => {
					if (!calibrationOperator || !gaugeId || !dueMonths || !labelType) {
						setFormFailed(true);
						return;
					}
					setFormFailed(false);
					Print(dueMonths, calibrationOperator, gaugeId, labelType);
				}}
			>
				Print
			</Button>
		</>
	);
}

export default HomePage;
