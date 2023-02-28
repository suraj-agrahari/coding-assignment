var scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", function () {
	
  // If user scrolls down more than 20 pixels, show the button
  if (window.pageYOffset > 20) {
    scrollToTopBtn.style.display = "block";
  } 
});

scrollToTopBtn.addEventListener("click", function() {
  // Scroll to top smoothly
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

let serviceData = document.querySelector('.service-data');
const serviceDataToShow = [
	{
		id: 1,
		image: 'Search-doctor.svg',
		title: 'Search doctor',
		description:
			'In this case, the role of the health laboratory is very important to do a disease detection...',
	},
	{
		id: 2,
		image: 'Online-pharmacy.svg',
		title: 'Online pharmacy',
		description:
			'Buy  your medicines with our mobile application with a simple delivery system',
	},
	{
		id: 3,
		image: 'Consultation.svg',
		title: 'Consultation',
		description:
			'Free consultation with our trusted doctors and get the best recomendations',
	},
	{
		id: 4,
		image: 'Details-info.svg',
		title: 'Details info',
		description:
			'Free consultation with our trusted doctors and get the best recomendations',
	},
	{
		id: 5,
		image: 'Emergency-care.svg',
		title: 'Emergency care',
		description:
			'You can get 24/7 urgent care for yourself or your children and your lovely family',
	},
	{
		id: 6,
		image: 'Tracking.svg',
		title: 'Tracking',
		description: 'Track and save your medical history and health data ',
	},
];
const mappedServiceData = serviceDataToShow.map((data) => {
	return `<div class="card" key = ${data.id}>
					<img
						src= ${"./images/"+data.image}
						alt="Search"
						height="90.01px"
						width="91.98px" />
					<b class="card-title">${data.title}</b>
					<p class="card-description">
						${data.description}

					</p>
				</div>`;
});
serviceData.innerHTML = mappedServiceData;






