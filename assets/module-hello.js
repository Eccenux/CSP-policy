export function setupHello(element) {
	document.querySelector(element).addEventListener('click', () => {
		alert('Hello from the module!');
	});
}
