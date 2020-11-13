import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
// import User from './js/user.js';

$(document).ready(function () {
	$('#formOne').submit(function (event) {
		event.preventDefault();
		console.log('hello world');
	});
});
