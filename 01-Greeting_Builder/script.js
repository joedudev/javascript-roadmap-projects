const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
	const firstName = form.elements.firstName.value;
	const lastName = form.elements.lastName.value;
	const timeOfDay = form.elements.timeOfDay.value;
	const greeting = createGreeting(firstName, lastName, timeOfDay);
	insertGreeting(greeting);
});
const greetingElement = document.getElementById("greeting");

function formateName(firstName, lastName) {
	return firstName + " " + lastName;
}

function getGreeting(timeOfDay) {
	if (timeOfDay === "morning") {
		return "Good morning!";
	} else if (timeOfDay === "afternoon") {
		return "Good afternoon!";
	} else if (timeOfDay === "evening") {
		return "Good evening!";
	} else {
		return "Hello!";
	}
}

function createGreeting(firstName, lastName, timeOfDay) {
	const fullName = formateName(firstName, lastName);
	const greeting = getGreeting(timeOfDay);
	return greeting + " " + fullName + "!";
}

function insertGreeting(greeting) {
	greetingElement.textContent = greeting;
}
