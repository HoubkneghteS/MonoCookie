var monoPath; //monopath is a global variable for the MonoCookie Mod file location

Game.registerMod("monocookiehoub", {
	init: function () {

		monoPath = this.dir;

		//Main texture changes
		Game.Loader.Replace('perfectCookie.png',`${monoPath}/assets/ball_monokuma.png`);		
		Game.Notify(`Monokuma Cookie!!!`, `MONOKUMA`, [0, 0, `${monoPath}/assets/icon.png`], 7);


		//0.01 chance to play Monokuma laughing every second
		function playSound() {
			const roll = Math.random();

			if (roll <= 0.001) {
				PlaySound(`${monoPath}/assets/monokuma_laugh.mp3`, 0.5);
				Game.Notify(`Monokuma Laughs!!!`, `Pupupu`, [0, 0, `${monoPath}/assets/icon.png`], 7);
			}

			setTimeout(playSound, 1000);
		}

		playSound();
	},
});