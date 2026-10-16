// Hold the page still while a drawer is up. Without it, a swipe that starts on the drawer's header
// or footer — or runs past the end of its scrolling list — scrolls the page behind instead.
// The scrollbar's width is padded back so the page does not jump sideways on desktop.
// Returns a function that restores whatever inline styles were there before.
export function lockPageScroll(): () => void {
	const html = document.documentElement;
	const body = document.body;
	const gutter = window.innerWidth - html.clientWidth;
	const previous = {
		htmlOverflow: html.style.overflow,
		bodyOverflow: body.style.overflow,
		bodyPadding: body.style.paddingRight
	};
	html.style.overflow = 'hidden';
	body.style.overflow = 'hidden';
	if (gutter > 0) body.style.paddingRight = `${gutter}px`;
	return () => {
		html.style.overflow = previous.htmlOverflow;
		body.style.overflow = previous.bodyOverflow;
		body.style.paddingRight = previous.bodyPadding;
	};
}
