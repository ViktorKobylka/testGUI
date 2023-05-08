//Author: Viktor Kobylka

let size = 0; //variable to check the maximum quantity of items

const output =  document.querySelector('.select-output'); //find the element by class of current selector

// check of click
window.addEventListener('click', function (event) {
	//check of click on the button with attribute item-select
	if (event.target.hasAttribute('item-select')) {
		//if statement with limitation of items in basket
		if(size < 3)
		{
			size++; //increment the value of variable size, count items in basket

			//find the class of our product (some book) inside which there was a click
			const book = event.target.closest('.book');

			// get data about our product (book) and assign it in the object BookInfo
			const BookInfo = {
				id: book.dataset.id,
				imgsrc: book.querySelector('.book-img').getAttribute('src'),
				name: book.querySelector('.book-name').innerText,
				price: book.querySelector('.price').innerText,
			};


			//give our data of the object to the set of product in basket
			const dataBook = `<div class="delete_book" data-id="${BookInfo.id}">
									<div class="book_basket text-center">
										<img id="img_basket" src="${BookInfo.imgsrc}" alt="${BookInfo.title}">
										<div>${BookInfo.name} <b class="price">${BookInfo.price}</b></div>
										<button id="delete" data-action="delete">delete</button>
									</div>
								</div>`;
			//make the output 					
			output.insertAdjacentHTML('beforeend', dataBook);

		}
	}

});

// check of click 
window.addEventListener('click', function (event) {
	// check if element inside which there was a click is the button delete
	if (event.target.dataset.action === 'delete') {
		size--;//decrement the value of variable size, remove the value of counter of items in the basket
		event.target.closest('.delete_book').remove(); //delete all elements of the class delete_book (remove our product drom basket)
	}
});

// check of click
window.addEventListener('click', function (event) {
	// check if element inside which there was a click has the attribute order
		if (event.target.hasAttribute('order')){
			//check for basket contents
			if(size == 0){
				alert("Your basket is empty");//show message if there are no basket contents
			}
			else 
				alert("Your purchase was successful");//show message if there are basket contents
		}
});
