// SWITCHING CONTENT HTML


async function fetchHtmlAsText(page) {
    return await (await fetch(page)).text();
}


async function loadContent(val) {
    const pageID = val.id.toString();
    const page = pageID + '.html';
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = await fetchHtmlAsText(page);
}

loadContent(advertisers);

getAdvertisers();


// OUTLETS


async function getOutlets() {
    const outlets = 'https://www.digitalfields.co.za/Gateway/RSD/ws1.cfc?method=getOutlets&HPUBLISHERID=2';
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

// Advertisers

async function getAdvertisers() {
    const advertisers = 'https://www.digitalfields.co.za/Gateway/RSD/ws1.cfc?method=getAdvertisers&HPUBLISHERID=2';
    fetch(advertisers)
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

// Creating Cards

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
