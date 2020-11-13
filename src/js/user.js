export class User {
	constructor(earthAge, lifeExpectancy) {
		this.earthAge = earthAge;
		this.lifeExpectancy = lifeExpectancy;
	}

	earthYearsLeft() {
		return this.lifeExpectancy - this.earthAge;
	}

	mercuryAge() {
		return this.earthAge / 0.24;
	}

	mercuryYearsLeft() {
		return (this.lifeExpectancy - this.earthAge) / 0.24;
	}

	venusAge() {
		return this.earthAge / 0.62;
	}

	marsAge() {
		return this.earthAge / 1.88;
	}

	jupiterAge() {
		return this.earthAge / 11.86;
	}
}
