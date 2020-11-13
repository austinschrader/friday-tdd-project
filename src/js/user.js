export class User {
	constructor(earthAge) {
		this.earthAge = earthAge;
	}

	mercuryAge() {
		return this.earthAge * 0.24;
	}

	venusAge() {
		return this.earthAge * 0.62;
	}
}
