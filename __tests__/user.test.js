import { User } from './../src/js/user.js';

describe('User', () => {
	test('should correct output the earth age of the User object', () => {
		const user = new User(45);
		expect(user.earthAge).toEqual(45);
	});
});
