import anime from "animejs/lib/anime.es.js";

export function fitElementToParent(el, padding) {
	var timeout = null;
	function resize() {
		if (timeout) clearTimeout(timeout);
		anime.set(el, { scale: 1 });
		var pad = padding || 0;
		var parentEl = el.parentNode;
		var elOffsetWidth = el.offsetWidth - pad;
		var parentOffsetWidth = parentEl.offsetWidth;
		var ratio = parentOffsetWidth / elOffsetWidth;
		timeout =
			window.innerWidth >= 768 && setTimeout(anime.set(el, { scale: ratio }), 10);
	}

	resize();
	window.addEventListener("resize", resize);
}
