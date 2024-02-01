import db from "./firebase.js";

window.addEventListener("DOMContentLoaded", function() {
    const sadNameInput = this.document.getElementById("sad-name-input");
    const sadItemInput = this.document.getElementById("sad-item-input");
    const sadItemList = this.document.getElementById("sad-item-list");
    const submitButton = this.document.getElementById("submit-button");

    let sadList = new Array();
    let sadNames = new Array();
    db.collection("sad-items").get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            sadList.push(doc.data().item);
            sadNames.push(doc.data().name);
        });

        for (let i = 0; i < sadList.length; i++) {
            const listItem = this.document.createElement("li");
            listItem.innerHTML = sadNames[i] + " - " + sadList[i];
            sadItemList.appendChild(listItem);
        }
    
        submitButton.addEventListener("click", function() {
            db.collection("sad-items").doc().set({
                item: sadItemInput.value,
                name: sadNameInput.value
            })
            .then(() => {
                location.reload();
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });    
});