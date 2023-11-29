//your JS code here. If required.
const list = document.querySelector('#bands');
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
let result = [];
bands.forEach(elem => {
	let str = elem.split(' ');
	// console.log(str);
	let  done = str.filter(e => {
		let s = e.toLowerCase();
		// console.log(s);
		 if(s != 'the' && s != 'a' && s != 'an'){
			// console.log(e);
			return e;
		 }
	})
	
	result.push(done.join(' '));
})
result.sort();
let final = [];
for(let i = 0; i < result.length; i++){
	for(let j = 0; j < result.length; j++){
		if(bands[j].includes(result[i])){
			final.push(bands[j]);
		}
	}
}

final.forEach(elem => {
	let li = document.createElement('li');
	li.innerText = elem;
	list.appendChild(li);
})