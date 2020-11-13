import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import { User } from './js/user.js';

$(document).ready(function () {
	$('#formOne').submit(function (event) {
		event.preventDefault();
		let lifeExpectancy = parseInt($('#life-expectancy').val());
		let earthAge = parseInt($('#earth-age').val());

		let user = new User(earthAge, lifeExpectancy);
		console.log(user);
		$('#results').empty().append(`<ul> Your Solar Age Information:
    <li>Earth age: ${user.earthAge}</li>
    <li>Earth Life Expectancy: ${user.earthYearsLeft(
			lifeExpectancy - earthAge
		)}</li>
    <li>Mercury age: ${user.mercuryAge()}</li>
    <li>Mercury Life Expectancy: ${user.mercuryYearsLeft(
			(lifeExpectancy - earthAge) / 0.24
		)}</li>
    <li>Venus age: ${user.venusAge()}</li>
    <li>Venus Life Expectancy: ${user.venusYearsLeft(
			(lifeExpectancy - earthAge) / 0.62
		)}</li>
    <li>Mars age: ${user.marsAge()}</li>
    <li>Mars Life Expectancy: ${user.marsYearsLeft(
			(lifeExpectancy - earthAge) / 1.88
		)}</li>
    <li>Jupiter age: ${user.jupiterAge()}</li>
    <li>Jupiter Life Expectancy: ${user.jupiterYearsLeft(
			(lifeExpectancy - earthAge) / 11.86
		)} </li>
    </ul>
    
    
    
    `);
	});
});
