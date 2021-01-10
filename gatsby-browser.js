exports.onRouteUpdate = ({ location }) => {
	//dom activator
	const activateTarget = document.querySelectorAll('body, .js-activate');
	const activateNode = Array.prototype.slice.call(activateTarget);
	activateNode.forEach(node => { 
		if (node.classList.contains('js-activate')) { 
			node.classList.remove('js-activate');
		}
		node.classList.add('is-active');
	})

	//dom reveal
	const revealTarget = document.querySelectorAll('.js-reveal')
	const options = {
			rootMargin: '0px 0px',
	};
	const observer = new IntersectionObserver(callback, options)
	revealTarget.forEach((target) => {
		observer.observe(target)
	});
	function callback(entries) {
		entries.forEach(function(entry, i) {
			if (entry.isIntersecting && entry.target.classList.contains('js-reveal')) {
				const delay = i * 150
				entry.target.style.transitionDelay = `${delay}ms`
				entry.target.classList.add('is-revealed')
			}
		});
	};
};