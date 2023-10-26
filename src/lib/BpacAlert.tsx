import { Alert, Button } from 'flowbite-react';
import { HiArrowNarrowRight, HiOutlineInformationCircle } from 'react-icons/hi';

export function BpacAlert() {
	return (
		<>
			<Alert icon={HiOutlineInformationCircle}>
				<p className='pb-2'>
					You must have b-PAC installed. If you do not, please click the button
					below to download the drivers.
				</p>
				<a href='https://support.brother.com/g/b/agreement.aspx?dlid=dlfp101010_000'>
					<Button size='xs' color='blue'>
						Download Now
						<HiArrowNarrowRight className='ml-1 h-4 w-4' />
					</Button>
				</a>
			</Alert>
		</>
	);
}
