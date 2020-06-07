const definedObject = Object.create(Object.prototype, {
  publicMethods: {
		writable: true,
		// Access modifier
		configurable: true,
		value: 'hello'
	},
  privateMethods: {
		// Access modifier
    configurable: false,
    get: function() {
			return 10;
		},
		set: function(value) {
			console.log('Setting `o.bar` to', value);
		}
	}
});
