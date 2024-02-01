window.addEventListener("DOMContentLoaded", function() {
    const sadItemInput = this.document.getElementById("sad-item-input");
    const sadItemList = this.document.getElementById("sad-item-list");
    const submitButton = this.document.getElementById("submit-button");

    let sadList = new Array();
    if (localStorage.getItem("sad-items")) {
        sadList = JSON.parse(localStorage.getItem("sad-items"));
    }
    for (let i = 0; i < sadList.length; i++) {
        const listItem = this.document.createElement("li");
        listItem.innerHTML = sadList[i];
        sadItemList.appendChild(listItem);
    }

    submitButton.addEventListener("click", function() {
        sadList.push(sadItemInput.value);
        localStorage.setItem("sad-items", JSON.stringify(sadList));
        location.reload();
    });
});