const playlist = [
	{ id: 1, name: 'music 1', group: 'group1', album: 'abc1'},
	{ id: 2, name: 'music 2', group: 'group1', album: 'abc1'},
	{ id: 3, name: 'music 3', group: 'group1', album: 'abc2'},
	{ id: 4, name: 'music 4', group: 'group1', album: 'abc2'},
	{ id: 5, name: 'music 5', group: 'group2', album: 'abc2'},
	{ id: 6, name: 'music 6', group: 'group2', album: 'abc2'},
	{ id: 7, name: 'music 7', group: 'group2', album: 'abc2'},
	{ id: 8, name: 'music 8', group: 'group3', album: 'abc3'},
	{ id: 9, name: 'music 9', group: 'group3', album: 'abc3'},
	{ id: 10, name: 'music 10', group: 'group4', album: 'abc3'},
];

function shuffle(playlist) {
	if (!playlist || playlist.length == 0) {
		return [];
	}

	let shffledPlaylist = playlist;
	for (let i = 0; i < playlist.length; i++) {
		const randomIndex = Math.floor(Math.random() * playlist.length);
		const prevMusic = shffledPlaylist[i];
		const nextMusic = shffledPlaylist[randomIndex];
		shffledPlaylist[i] = nextMusic;
		shffledPlaylist[randomIndex] = prevMusic;
	}
	return shffledPlaylist;
}

function shuffleBy(playlist, byName) {
	if (!playlist || playlist.length == 0) {
		return [];
	}

	const separatingGroup = playlist.reduce((obj, music) => {
		if (!music[byName]) {
			return obj;
		}
		if (!obj[music[byName]]) {
			return {
				...obj,
				[music[byName]]: [
					{...music}
				],
			}
		}
		return {
			...obj,
			[music[byName]]: [
				...obj[music[byName]],
				{...music}
			],
		}
	}, {});
	return Object.keys(separatingGroup).reduce((arr, key) => {
		return [
			...arr,
			...shuffle(separatingGroup[key]),
		]
	}, []);
}

console.error(shuffleBy(playlist, 'group'));