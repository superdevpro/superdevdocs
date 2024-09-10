import {Head, Html} from 'next/document';
import {Main, NextScript} from 'next/document';

export default function Document() {
	return (
		<Html lang='en'>
			<Head />
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
