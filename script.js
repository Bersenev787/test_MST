function updateValue(val) {
  document.getElementById("sliderValue").textContent = val + "%";
}

// feedback

const testimonials = [
  {
    img: "img/face_1.jpg",
    name: "Paul Kellerman",
    text: "Excellent service! Everything is fast and high quality.",
  },
  {
    img: "img/face_2.jpg",
    name: "Kate Smith",
    text: "Very satisfied! I will contact you again.",
  },
  {
    img: "img/face_3.jpg",
    name: "Anna Bruks",
    text: "I liked everything, thank you! Have a nice Flight!",
  },
];

let currentIndex = 0;

function updateTestimonial() {
  const testimonial = testimonials[currentIndex];
  document.getElementById("feedback_content_testimonials_blok_img").src =
    testimonial.img;
  document.getElementById(
    "feedback_content_testimonials_blok_name"
  ).textContent = testimonial.name;
  document.getElementById(
    "feedback_content_testimonials_blok_text"
  ).textContent = testimonial.text;
}

function prevTestimonial() {
  currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
  updateTestimonial();
}

function nextTestimonial() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  updateTestimonial();
}

updateTestimonial();
