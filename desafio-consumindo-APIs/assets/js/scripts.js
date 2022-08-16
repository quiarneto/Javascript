const BASE_URL = "https://api.thecatapi.com/v1/images/search/";

const getCats = async () => {
	try {
		const data = await fetch(BASE_URL);
		const json = await data.json();
        console.log(json.id);
		return json[0].url;
	} catch (e) {
		console.log(e.message);
	}
};

const loadImg = async () => {
    console.log(getCats());
	const img = document.getElementsByTagName('img')[0];
	img.src = await getCats();
};

loadImg();

const btn = document.getElementById('change-cat');
btn.addEventListener('click', loadImg);


/*
const BASE_URL = 'https://api.thecatapi.com/v1/images/search/';
const catBtn = document.getElementById('change-cat');

const getCats = async () => {
    try {
        const response = await fetch(BASE_URL);
        const json = await response.json();
        console.log('response: ', response);
        console.log('keys: ', json.keys());
        return json;
    } catch (e) {
        console.log(e.message);
    }
};

console.log('retorno getCats: ', getCats());

const loadImg = async () => {
    const catImg = document.getElementById('cat');
    catImg.src = await getCats();
};

catBtn.addEventListener('click', loadImg);

loadImg();
*/