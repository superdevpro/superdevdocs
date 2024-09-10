export default function findBrowser() {
	if (process.browser && navigator.brave?.isBrave) return 'Brave';
	if (process.browser && navigator.userAgent.includes('Edg/')) return 'Edge';
	if (process.browser && navigator.userAgent.includes('Chrome/')) return 'Chrome';
	return 'Chrome';
}
