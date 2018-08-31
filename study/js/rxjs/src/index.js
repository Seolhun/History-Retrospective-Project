import {
	interval
} from 'rxjs'

interval(1000).subscribe(
	i => (
		document.getElementById('app').innerHTML = `<h1>${i}</h1>`
	)
);
