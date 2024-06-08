export default function findCmdKey() {
	if (process.browser && navigator.userAgent?.includes('Macintosh')) return 'Cmd';
	if (process.browser && navigator.userAgent?.includes('Mac OS X')) return 'Cmd';
	return 'Ctrl';
}
