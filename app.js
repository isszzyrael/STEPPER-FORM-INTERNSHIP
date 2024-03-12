const pages = document.getElementsByClassName("pages");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("submitBtn");
const steps = document.getElementsByClassName("steps");
const star = document.getElementsByClassName("star");
const rating = document.getElementById("rating");
const helperText = document.getElementById("filltext");

let currentPageIndex = 0;

function prevBtnClicked() {
  if (currentPageIndex > 0) {
    pages[currentPageIndex].classList.remove("active-page");
    currentPageIndex--;
    pages[currentPageIndex].classList.add("active-page");
  }

  updateButtonStates();
}

function nextBtnClicked() {
  if (currentPageIndex < pages.length - 1) {
    pages[currentPageIndex].classList.remove("active-page");
    currentPageIndex++;
    steps[currentPageIndex].classList.add("step-active");
    pages[currentPageIndex].classList.add("active-page");
  }
  if (currentPageIndex === 2) {
    helperText.textContent = "Let us know what you feel about the program";
  }
  updateButtonStates();
}

function updateButtonStates() {
  prevBtn.disabled = currentPageIndex === 0;
  nextBtn.disabled = currentPageIndex === pages.length - 1;

  if (prevBtn.disabled) {
    prevBtn.style.opacity = "0";
    prevBtn.style.pointerEvents = "none";
  } else {
    prevBtn.style.opacity = "1";
    prevBtn.style.pointerEvents = "all";
  }

  if (nextBtn.disabled) {
    nextBtn.style.opacity = "0";
    nextBtn.style.pointerEvents = "none";
  } else {
    nextBtn.style.opacity = "1";
    nextBtn.style.pointerEvents = "all";
  }

  if (currentPageIndex === 2) {
    nextBtn.style.display = "none";
    submitBtn.style.display = "block";
  }
}

const ratingEL = document.querySelectorAll(".rate");
let ratingSelected = 0;
ratingEL.forEach((rating, index1) => {
  rating.addEventListener("click", () => {
    ratingEL.forEach((rating, index2) => {
      //   console.log(index2);
      ratingSelected = index2;
      if (index1 >= index2) {
        rating.classList.add("checked");
      } else {
        rating.classList.remove("checked");
      }
    });
  });
});

const Fullname = document.getElementById("name");
const Email = document.getElementById("email");
const Locale = document.getElementById("location");
const Phonenumber = document.getElementById("phonenumber");
const Course = document.getElementById("enrolled-course");
const Gender = document.getElementById("gender");
const Comments = document.getElementById("comments");
const Rating = document.getElementById("rating");

// const reviewId = document.querySelector("review-container");

// const reviewName = document.querySelector("#review-name");
// const reviewEmail = document.querySelector("#review-email");
// const reviewLocation = document.querySelector("#review-location");
// const reviewNumber = document.querySelector("#review-number");
// const reviewCourse = document.querySelector("#review-course");
// const reviewGender = document.querySelector("#review-gender");
// const reviewComments = document.querySelector("#review-comments");
// const reviewRatings = document.querySelector("#review-rating");

function personsObject(
  name,
  email,
  locale,
  number,
  course,
  gender,
  comments,
  rating
) {
  return { name, email, locale, number, course, gender, comments, rating };
}

// console.log(Course.options[Course.selectedIndex].text);

const storedData = localStorage.getItem("listOfPersons");
const listOfPersons = storedData ? JSON.parse(storedData) : [];

const submitBtnClicked = () => {
  //   e.preventDefault();

  const person = personsObject(
    Fullname.value,
    Email.value,
    Locale.value,
    Phonenumber.value,
    Course.options[Course.selectedIndex].text,
    Gender.options[Gender.selectedIndex].text,
    Comments.value,
    ratingSelected
  );

  // const listOfPersons = [];
  // console.log(Course.value);
  // reviewName.textContent = Fullname.value;
  // reviewEmail.textContent = Email.value;
  // reviewLocation.textContent = Locale.value;
  // reviewNumber.textContent = Phonenumber.value;
  // reviewCourse.textContent = Course.options[Course.selectedIndex].text;
  // reviewGender.textContent = Gender.options[Gender.selectedIndex].text;
  // reviewComments.textContent = Comments.value;
  // reviewRatings.textContent = ratingSelected;

  listOfPersons.push(person);

  localStorage.setItem("listOfPersons", JSON.stringify(listOfPersons));
};

// Get all instances of the card
// const card = document.getElementsByClassName("card");
const reviewContainer = document.getElementById("review-container");

storedDataFromLocalStorage = JSON.parse(storedData);

const createReviewCard = (person) => {
  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${person.name}</td>
    <td>${person.email}</td>
    <td>${person.locale}</td>
    <td>${person.number}</td>
    <td>${person.course}</td>
    <td>${person.gender}</td>
    <td>${person.comments}</td>
    <td>${person.rating}</td>
  `;
  reviewContainer.appendChild(row);
  row.classList.add("table-row");
};

// Retrieve data from local storage and create review cards for each entry
// const storedData = localStorage.getItem('listOfPersons');
if (storedData) {
  const parsedData = JSON.parse(storedData);
  parsedData.forEach((person) => {
    createReviewCard(person);
  });
}

// storedDataFromLocalStorage.map((index) => {
//   // console.log(index);

//   // i think i have seen what they call object.enteries in js
//   // ok im also seeing  for in loops so i think its better

//   for (const property in index) {
//     console.log(index[property]);
//     const card = document.createElement("div");
//     card.classList.add("card");

//     card.innerHTML = `
//       <div>Name: <span>${index[property]}</span></div>
//       <div>E-mail: <span>${person.email}</span></div>
//       <div>Location: <span>${person.locale}</span></div>
//       <div>Phone-Number: <span>${person.number}</span></div>
//       <div>Course: <span>${person.course}</span></div>
//       <div>Gender: <span>${person.gender}</span></div>
//       <div>Comments: <span>${person.comments}</span></div>
//       <div>Rating: <span>${index[property]}</span> <i class="fa fa-star review-rate" aria-hidden="true" checked></i></div>
//     `;

//     reviewId.appendChild(card);
//   }
// });
