export default function findCtrlBtn() {
	if (process.browser && navigator.userAgent.includes('Macintosh')) return 'Cmd';
	if (process.browser && navigator.userAgent.includes('Windows')) return 'Ctrl';
	if (process.browser && navigator.userAgent.includes('Linux')) return 'Ctrl';
	return 'Ctrl';
}
