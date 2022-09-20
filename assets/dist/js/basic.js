/*
 * SimpleModal Basic Modal Dialog
 * http://simplemodal.com
 *
 * Copyright (c) 2013 Eric Martin - http://ericmmartin.com
 *
 * Licensed under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */

jQuery(function ($) {
	// Load dialog on page load
	//$('#basic-modal-content').modal();

	// Load dialog on click
	$('#basic-modal .basic').click(function (e) {
		$('#basic-modal-content').modal();

		return false;
	});

	$('#basic2-modal .basic2').click(function (e) {
		$('#basic2-modal-content').modal();

		return false;
	});

	$('#basic3-modal .basic3').click(function (e) {
		$('#basic3-modal-content').modal();

		return false;
	});
});