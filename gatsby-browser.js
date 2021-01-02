exports.onRouteUpdate = ({ location }) => {
	const activateTarget = document.querySelectorAll('body, .js-activate');
	const activateNodes = Array.prototype.slice.call(activateTarget);
	activateNodes.forEach(node => { 
		if (node.classList.contains('js-activate')) { 
			node.classList.remove('js-activate');
		}
		node.classList.add('is-active');
	})
};