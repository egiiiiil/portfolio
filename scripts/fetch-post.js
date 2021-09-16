function getPost() {
	fetch('../data/posts.json')
		.then((response) => response.json())
		.then((data) => {
			console.log('data :', data)
			for (let i = 0; i < data.length; i++) {
				createThumnail(data[i]);
			}
		});
}
function createThumnail(post) {
	const postContent = document.querySelector('.main__card');
	postContent.innerHTML += 
	`<div class="card__whole">
			<a class="card__link" href="./pages/post.html?id=${post.id}">
				<h3 class="card__h3">${post.title}</h3>
			</a>
			<img class="card__img" src="${post.previewImage}" alt="${post.previewImageAlt}">
			
			<p>
				<a class="main__p card__link" href="./pages/post.html?id=${post.id}">To post</a>
			</p>
	</div>`;
	// <p class="card__p">${post.shortSummary}</p>
}

function getPostUrl() {
	let urlParam = new URLSearchParams(window.location.search);
	return urlParam.get("id");
}

function getPostFromId() {
	const postContent = document.querySelector('.post__content');

	let id = JSON.parse(getPostUrl());
	console.log('id', id);
	fetch('../data/posts.json')
		.then((response) => response.json())
		.then((data) => {
			console.log('data', data);
			for (let i = 0; i < data.length; i++) {
				
				if (data[i].id == id) {
					console.log(data[i])
					postContent.innerHTML = 
					`<h2>${data[i].title}</h2>
					 ${data[i].content}`
				}
			}
		})
}