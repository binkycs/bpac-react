import { Alert, Button } from 'flowbite-react';
import { HiInformationCircle, HiArrowNarrowRight } from 'react-icons/hi';

export default function AdditionalContent() {
	return (
		<Alert
			// additionalContent={<ExampleAdditionalContent />}
			color="warning"
			icon={HiInformationCircle}
		>
			<p className="my-2">
				<span className="font-bold">Extension not installed! </span>
				<span className="font-medium">
					You must download the extension to use this website.
				</span>
			</p>
			<a href="https://chrome.google.com/webstore/detail/brother-b-pac-extension/ilpghlfadkjifilabejhhijpfphfcfhb/">
				<Button size="xs" color="blue">
					Download Now
					<HiArrowNarrowRight className="ml-1 h-4 w-4" />
				</Button>
			</a>
		</Alert>
	);
}
