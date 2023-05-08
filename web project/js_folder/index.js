const output =  document.querySelector('.select-output');
let size = 0; //если больше 5 книг то идет по пизде структура сайта

window.addEventListener('click', function (event) {
	// Проверяем что клик был совершен по кнопке "Добавить в корзину"

	
	if (event.target.hasAttribute('item-select')) {
		if(size < 3)
		{
			size++;
			// Находим карточку с товаром, внутри котрой был совершен клик
			const book = event.target.closest('.book');

			// Собираем данные с этого товара и записываем их в единый объект BookInfo
			const BookInfo = {
				id: book.dataset.id,
				imgsrc: book.querySelector('.book-img').getAttribute('src'),
				name: book.querySelector('.book-name').innerText,
				price: book.querySelector('.price').innerText,
			};

			//console.log(BookInfo);

			// Собранные данные подставим в шаблон для товара в корзине
			const dataBook = `<div class="delete_book" data-id="${BookInfo.id}">
									<div class="book_basket">
										<img id="img_basket" src="${BookInfo.imgsrc}" alt="${BookInfo.title}">
										<div>${BookInfo.name} <b id="price_color" class="price">${BookInfo.price}</b></div>
										<button id="delete" data-action="delete">delete</button>
									</div>
								</div>`;
			output.insertAdjacentHTML('beforeend', dataBook);

		}
	}

});

window.addEventListener('click', function (event) {
	if (event.target.dataset.action === 'delete') {
		size--;
		event.target.closest('.delete_book').remove();
	}
});
