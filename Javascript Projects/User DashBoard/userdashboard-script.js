const users = [
    { name: "Pugazh", age: 20, active: true },
    { name: "Kabish", age: 21, active: true },
    { name: "Aswin", age: 26, active: false },
    { name: "Abinesh", age: 15, active: true },
    { name: "Tholks", age: 32, active: false },
    { name: "Suhail", age: 17, active: true },
    { name: "Gowri", age: 23, active: false },
    { name: "Sudha", age: 45, active: false },
    { name: "Venkat", age: 55, active: true },
    { name: "Bala Lakshmi", age: 48, active: true },
    { name: "Kamaraj", age: 55, active: false },
    { name: "Naveen", age: 20, active: true },
];

let userHtml = "";

users.forEach((user) => {
    let status,
        colorCode = "";
    if (user.active) {
        status = "Active";
        colorCode = "active";
    } else {
        status = "Inactive";
        colorCode = "inactive";
    }

    userHtml += `
        <article class="userCard" data-active="${user.active}">
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
