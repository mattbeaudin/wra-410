document.addEventListener('DOMContentLoaded', function() {
	// Manage navigation state
	const navToggle = document.querySelector('.nav-toggle');
	const mobileNav = document.querySelector('.mobile-list');
	navToggle.addEventListener('click', function(e) {
		mobileNav.classList.toggle('nav-open');
	}, false);

	// Add tabindex to each anchor tag
	const anchorTags = document.querySelectorAll('a');
	anchorTags.forEach(function(anchor, i) {
		anchor.setAttribute('tabindex', i);
	});
});
