import { Navbar } from 'flowbite-react';

export default function DefaultNavbar() {
	return (
		<Navbar fluid rounded className='mx-24'>
			<Navbar.Brand href='/'>
				<img
					src='/vite.svg'
					className='mr-3 h-6 sm:h-9'
					alt='Flowbite React Logo'
				/>
				<span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
					Label Printer
				</span>
			</Navbar.Brand>
			{/* <Navbar.Toggle /> */}
			{/* <Navbar.Collapse>
				<Navbar.Link href='/' active>
					Home
				</Navbar.Link>
				<Navbar.Link href='/test'>Test Route</Navbar.Link>
			</Navbar.Collapse> */}
		</Navbar>
	);
}
