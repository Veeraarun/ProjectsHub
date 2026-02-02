import User from "./user-data.js";

const users =[
    new User("Sadie Sink", 22),
    new User("Kabish Durai", 21),
    new User("Pugazh Noob", 20)
];

let userHtml = "";

users.forEach((user, index) => {
    const status = user.statusText;
    const colorCode = user.active ? "active" : "inactive";

    userHtml += `
        <article class="userCard" data-active="${user.active}" data-index="${index}">
            <p class="name">${user.name}</p>
            <p class="age">Age: ${user.age}</p>
            <button class="statusBtn ${colorCode}"><img src="Icons/dot.png"> ${status}</button>
        </article>
    `;
});

document.querySelector(".userCards").innerHTML = userHtml;

document.querySelector(".totalCount").textContent = users.length;

let totalage = users.reduce((sum, user) => sum + user.age, 0);

document.querySelector(".averageValue").textContent = (
    totalage / users.length
).toFixed(2);

let showOnlyActive = false;

function hideInactive() {
    showOnlyActive = !showOnlyActive;
    const btn = document.querySelector(".filterBtn");
    const cards = document.querySelectorAll(".userCard");
    cards.forEach((card) => {
        const isActive = card.dataset.active === "true";
        if (showOnlyActive && !isActive) {
            card.classList.add("hideCard");
        } else {
            card.classList.remove("hideCard");
        }
    });
    btn.textContent = showOnlyActive ? "Show All Users" : "Show Active Users";
    btn.classList.toggle("active", showOnlyActive);
}
