'use strict';
(() => {
	const $loginLi = $("#login-item");
	const $registerLi = $("#register-item");
	const $dashItem = $("#dash-item");

	const jwt = localStorage.getItem('jwt');
	if (!jwt) {
	    $loginLi.show();
	    $registerLi.show();
	} else {
	    $dashItem.show();
	}

})();