import type { Attachment } from 'svelte/attachments';

export function clickOutside(callback: () => void): Attachment {
	return (node) => {
		function handleClick(event: MouseEvent) {
			if (!node.contains(event.target as Node)) {
				callback();
			}
		}

		document.addEventListener('click', handleClick, true);

		return () => {
			document.removeEventListener('click', handleClick, true);
		};
	};
}
