import {
	createBrowserRouter,
	RouterProvider,
	LoaderFunction,
	ActionFunction,
} from 'react-router-dom';
import Navbar from './lib/navbar/Navbar';

interface RouteCommon {
	loader?: LoaderFunction;
	action?: ActionFunction;
	ErrorBoundary?: React.ComponentType<unknown>;
}

interface IRoute extends RouteCommon {
	path: string;
	Element: React.ComponentType<unknown>;
}

interface Pages {
	[key: string]: {
		default: React.ComponentType<unknown>;
	} & RouteCommon;
}

const pages: Pages = import.meta.glob('./pages/**/*.{tsx,jsx}', {
	eager: true,
});

const routes: IRoute[] = [];
for (const path of Object.keys(pages)) {
	const fileName = path.match(/\.\/pages\/(.*)\.(tsx|jsx)$/)?.[1];
	if (!fileName) {
		continue;
	}

	const normalizedPathName = fileName.includes('$')
		? fileName.replace('$', ':')
		: fileName.replace(/\/index/, '');

	routes.push({
		path: fileName === 'index' ? '/' : `/${normalizedPathName.toLowerCase()}`,
		Element: pages[path].default,
		loader: pages[path]?.loader as LoaderFunction | undefined,
		action: pages[path]?.action as ActionFunction | undefined,
		ErrorBoundary: pages[path]?.ErrorBoundary,
	});
}

const router = createBrowserRouter(
	routes.map(({ Element, ErrorBoundary, ...rest }) => ({
		...rest,
		element: <Element />,
		...(ErrorBoundary && { errorElement: <ErrorBoundary /> }),
	}))
);

const App = () => {
	return (
		<div>
			<Navbar />
			<div className='flex h-[calc(100vh-12rem)]'>
				<div className='m-auto space-y-6'>
					<RouterProvider router={router} />
				</div>
			</div>
		</div>
	);
};

export default App;
