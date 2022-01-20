function getPost() {
	fetch('http://localhost:8888/wp-json/wp/v2/posts?_embed')
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			for (let i = 0; i < data.length; i++) {
				let formated = formatPost(data[i]);
				console.log(formated)
				createThumnail(formated);
			}
		});
}

function formatPost(post) {
	let formated = {
		id: post.id,
		title: post.title.rendered,
		previewImage: post._embedded['wp:featuredmedia'][0].source_url,
		previewImageAlt: post._embedded['wp:featuredmedia'][0].alt_text,
		content: post.content.rendered
	}
	return formated;
}

function createThumnail(post) {
	const postContent = document.querySelector('.main__card');
	postContent.innerHTML += 
	`<li class="card__whole">
			<a class="card__link" href="./pages/post.html?id=${post.id}">
				<h2 class="card__h3">${post.title}</h2>
			</a>
			<img class="card__img" src="${post.previewImage}" alt="${post.previewImageAlt}">
			
			<p>
				<a class="card__p card__link" href="./pages/post.html?id=${post.id}">To ${post.title}</a>
			</p>
	</li>`;
}








function getPostUrl() {
	let urlParam = new URLSearchParams(window.location.search);
	return urlParam.get("id");
}

function getPostFromId() {
	const postContent = document.querySelector('.post__content');

	let id = JSON.parse(getPostUrl());
	console.log('id', id);
	fetch(`http://localhost:8888/wp-json/wp/v2/posts/${id}?_embed`)
		.then((response) => response.json())
		.then((data) => {
			let post = formatPost(data);
			postContent.innerHTML = 
					`<h1>${post.title}</h1>
					 ${post.content}`
		})
}