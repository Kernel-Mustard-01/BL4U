// SWITCHING CONTENT HTML

// const { createDecipheriv } = require("crypto");

async function fetchHtmlAsText(page) {
    return await (await fetch(page)).text();
}


async function loadContent(val) {
    const pageID = val.id.toString();
    const page = pageID + '.html';
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = await fetchHtmlAsText(page);
}

loadContent(outlets);

listFromWeb();


// OUTLETS


async function listFromWeb() {
    const outlets = 'https://www.digitalfields.co.za/Gateway/RSD/ws1.cfc?method=getOutslist&HPUBLISHERID=2';
    fetch(outlets)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // orderData(data);
        for (let i = 0; i < data.length; i++){
            createDiv(data[i]);
        }
    })
    .catch(err => console.log(err));
};

const createDiv = function(newCard){
    const detail = Object.values(newCard);
    console.log(detail);
    const id = "card_" + detail[2];
    console.log(id)
    const cardRow = document.querySelector('.row');
    cardRow.innerHTML += `
            <div class="card">
                <div class="card-header">
                    <h3>This is a test</h3>
                </div>
                <div class="card-body ${id}">
                </div>
            </div>
            `;
    
    for (let i = 0; i < detail.length; i++){
        const cardID = document.querySelector(`.${id}`);
            cardID.innerHTML += `
            <br>
            <span>${detail[i]}</span>
            `;
    } 
};
