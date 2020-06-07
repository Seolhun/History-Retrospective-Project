class Example {
	constructor({ name, description }) {
		this.name = name;
		this.description = description;
	}

	getExampleName() {
		return this.name;
	}

	setExampleName (name) {
		this.name = name;
		return name;
	}
}

const ex = new Example({
	name: 'Hello',
	description: 'Hello Description'
});

class DocsExample extends Example {
	constructor(props) {
		super(props);
		this.docs = props.docs;
	}

	getDocs () {
		return this.docs;
	}

	setDocs () {
		return this.docs;
	}
}

const docsEx = new DocsExample({
	name: 'Hello',
	description: 'Hello Description'
});
