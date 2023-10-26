import { Alert, Button } from 'flowbite-react';
import { HiOutlineInformationCircle, HiArrowNarrowRight } from 'react-icons/hi';

export default function AdditionalContent() {
	return (
		<Alert
			// additionalContent={<ExampleAdditionalContent />}
			color='warning'
			icon={HiOutlineInformationCircle}
		>
			<p className='my-2'>
				You must also download the browser extension to use this website.
			</p>
			<a
				target='_blank'
				href='https://chrome.google.com/webstore/detail/brother-b-pac-extension/ilpghlfadkjifilabejhhijpfphfcfhb/'
			>
				<Button size='xs' color='blue'>
					Download Now
					<HiArrowNarrowRight className='ml-1 h-4 w-4' />
				</Button>
			</a>
		</Alert>
	);
}
