window.onload = function () {
	document.addEventListener("click", documentActions);
	function documentActions(e) {
		const targetElement = e.target;
		if (targetElement.classList.contains("checkbox-plan__label")) {
			if (!targetElement.classList.contains('_active')) {
				document.querySelector('.checkbox-plan__label._active').classList.remove('_active');
				document.querySelector('.checkbox-plan__bg').classList.toggle('_active');
				targetElement.classList.add('_active');
			}
		}
	}
}

