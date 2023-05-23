const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let i = 0;
let last = slides.length - 1;

const SlideImg = document.getElementById('Slide-Img');

const suivant = () => {
	i = i +1;
	if( i === 4){
		i = 0;
	}
	
}

const precedent = () => {
	i = i -1;
	if( i === -1){
		i = 3;
	}
	
}



const arrowLeft= document.querySelector(".arrow_left")
const arrowRight= document.querySelector(".arrow_right")
const bannerText = document.querySelector('#banner > p');
const DotSlide = document.querySelector(".dot")



 arrowLeft.addEventListener('click', e =>{
 	console.dir("swipe left" + slides[i]+ [i]);
 	precedent();
 	SlideImg.src= "./assets/images/slideshow/" + slides[i].image;
 	bannerText.innerHTML = slides[i].tagLine;
	 
	
 })

 arrowRight.addEventListener('click' , e=>{
 	console.dir('swipe right'+ slides[i]+ [i]);
 	suivant()
 	SlideImg.src="./assets/images/slideshow/" + slides[i].image;
 	bannerText.innerHTML = slides[i].tagLine;

})









