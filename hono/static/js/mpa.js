document.addEventListener('alpine:init', () => {
	console.log('init store')
	Alpine.store('darkMode', {
		on: false,

		toggle() {
			this.on = ! this.on
		},

		get theme() {
			return this.on ? 'dark' : 'light'
		}
	})
});
