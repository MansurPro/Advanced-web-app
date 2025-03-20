"use strict";

const getElement = selector => document.querySelector(selector);

const displayErrorMsgs = msgs => {
    const ul = document.createElement("ul");
    ul.classList.add("messages");

    for (let msg of msgs) {
        const li = document.createElement("li");
        li.appendChild(document.createTextNode(msg));
        ul.appendChild(li);
    }

    const existingNode = getElement("ul");
    if (existingNode == null) {
        const form = getElement("form");
        form.parentNode.insertBefore(ul, form);
    } else {
        existingNode.parentNode.replaceChild(ul, existingNode);
    }
};

const processEntries = () => {
    const email = getElement("#email_address");
    const phone = getElement("#phone");
    const country = getElement("#country");
    const state = getElement("#state");
    const zipCode = getElement("#zip_code");
    const terms = getElement("#terms");

    const msgs = [];

    // Email validation (should contain "@" and ".")
    if (email.value === "") {
        msgs.push("Please enter an email address.");
    } else if (!email.value.includes("@") || !email.value.includes(".")) {
        msgs.push("Please enter a valid email address with '@' and '.'");
    }

    if (phone.value === "") {
        msgs.push("Please enter a mobile phone number.");
    } else if (isNaN(phone.value)) {
        msgs.push("Please enter a valid mobile phone number.");
    }
    if (country.value === "") {
        msgs.push("Please select a country.");
    }
    if (state.value === "") {
        msgs.push("Please enter a state.");
    }
    if (zipCode.value === "") {
        msgs.push("Please enter a zip code.");
    } else if (isNaN(zipCode.value)) {
        msgs.push("Please enter a valid zip code.");
    }
    if (!terms.checked) {
        msgs.push("You must agree to the terms of service.");
    }

    if (msgs.length === 0) {
        getElement("form").submit();
    } else {
        displayErrorMsgs(msgs);
    }
};

const resetForm = () => {
    getElement("form").reset();
    const ul = getElement("ul");
    if (ul !== null) ul.remove();
    getElement("#email_address").focus();
};

document.addEventListener("DOMContentLoaded", () => {
    getElement("#register").addEventListener("click", processEntries);
    getElement("#reset_form").addEventListener("click", resetForm);
    getElement("#email_address").focus();
});
