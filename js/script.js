// Testimonial Section
const testimonials = [
    {   //0
        name: "Alexandra Tan",
        job: "Traveler Review",
        image: "../img/user-testimonial-1.png",
        testimonial:"Recently returned from an incredible trip to Bali booked through ITRIP. The entire experience was nothing short of magical! From the moment we landed, the beauty of the island unfolded before us – stunning rice terraces, pristine beaches, and a vibrant cultural scene. The recommendations provided by the website were spot on; we explored ancient temples like Uluwatu, witnessed mesmerizing traditional dances, and indulged in the island's diverse culinary delights. The accommodations suggested were top-notch, offering both comfort and a taste of local charm. The seamless booking process and the detailed itinerary made our journey stress-free, allowing us to focus on soaking in the magic of Bali. Thanks to ITRIP, we had a truly unforgettable experience, and I can't wait to plan my next adventure through this fantastic platform!",
    },
    {   //1
        name: "Alexander Ramirez",
        job: "Travel Blogger",
        image: "../img/user-testimonial-1.png",
        testimonial:"iTrip made my recent journey an unforgettable experience! From the seamless booking process to the curated itineraries, they ensured every moment was a new adventure waiting to be discovered. As a travel blogger, I highly recommend iTrip for creating the perfect blend of comfort and exploration.",
    },
    {   //2
        name: "Olivia Bennett",
        job: "Travel Photographer",
        image: "../img/user-testimonial-1.png",
        testimonial:"Capturing the essence of a destination requires careful planning and an understanding of the local culture. iTrip not only met but exceeded my expectations. Their local insights and dedication to authenticity allowed me to focus on my passion - photography. Grateful for the incredible memories they helped me create!",
    },
    {   //3
        name: "Ethan Chen",
        job: "Tour Guide",
        image: "../img/user-testimonial-1.png",
        testimonial:"As a tour guide, I value collaboration with reliable travel agencies. iTrip has consistently demonstrated a commitment to creating unique and enriching experiences for their clients. Their support ensures that my tours are seamless, leaving travelers with lasting memories of the destinations we explore together.",
    },
    {   //4
        name: "Sophia Patel",
        job: "Hotel Concierge",
        image: "../img/user-testimonial-1.png",
        testimonial:"Working in the hospitality industry, I appreciate the importance of a well-orchestrated travel plan. iTrip's commitment to excellence shines through in every detail. From accommodation to local recommendations, they prioritize the comfort and enjoyment of their clients. A pleasure to collaborate with!",
    },
];

// Current Slide
let i = 0;
// total slide
let j = testimonials.length;

let userProfile = document.getElementById("user-profile");
let nameJob = document.getElementById("name-job");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
let userComment = document.getElementById("user-comment")

nextBtn.addEventListener("click", () => {
    i = (j + i + 1) % j;
    displayTestimonial();
});

prevBtn.addEventListener("click", () => {
    i = (j + i - 1)%j;
    displayTestimonial();
});

let displayTestimonial = () => {
    userProfile.innerHTML = `
        <img src=${testimonials[i].image}>
    `;
    nameJob.innerHTML =`
        <h3>${testimonials[i].name}</h3>
        <p>${testimonials[i].job}</p>
    `;
    userComment.innerHTML = `
        <p>${testimonials[i].testimonial}</p>
    `;
};

window.onload = displayTestimonial;