import db from "./firebase.js";

window.addEventListener("DOMContentLoaded", function() {
    const sadNameInput = this.document.getElementById("sad-name-input");
    const sadItemInput = this.document.getElementById("sad-item-input");
    const sadItemList = this.document.getElementById("sad-item-list");
    const submitButton = this.document.getElementById("submit-button");

    let sadList = new Array();
    let sadNames = new Array();
    db.collection("sad-items")
    .orderBy("timestamp")
    .get()
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
    
        const timestamp = firebase.firestore.FieldValue.serverTimestamp();        
        submitButton.addEventListener("click", function() {
            if (sadItemInput.value && sadNameInput.value) {
                db.collection("sad-items").doc().set({
                    item: sadItemInput.value,
                    name: sadNameInput.value,
                    timestamp: timestamp
                })
                .then(() => {
                    location.reload();
                })
                .catch((error) => {
                    console.error("Error writing document: ", error);
                });
            }
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });    
});