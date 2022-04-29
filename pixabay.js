function change_img_1(json) {
    const index = Math.floor(Math.random() * json.hits.length);
    IMG_1.src = json.hits[index].largeImageURL;
}

function change_img_2(json) {
    const index = Math.floor(Math.random() * json.hits.length);
    IMG_2.src = json.hits[index].largeImageURL;
}

function change_img_3(json) {
    const index = Math.floor(Math.random() * json.hits.length);
    IMG_3.src = json.hits[index].largeImageURL;
}

function change_img_4(json) {
    const index = Math.floor(Math.random() * json.hits.length);
    IMG_4.src = json.hits[index].largeImageURL;
}

function change_img_5(json) {
    const index = Math.floor(Math.random() * json.hits.length);
    IMG_5.src = json.hits[index].largeImageURL;
}


fetch(PIXABAY_API_ADDRESS + PIXABAY_API_KEY + PIXABAY_API_ENDPOINT + DESTINATION_1).then(onResponse).then(change_img_1);
fetch(PIXABAY_API_ADDRESS + PIXABAY_API_KEY + PIXABAY_API_ENDPOINT + DESTINATION_2).then(onResponse).then(change_img_2);
fetch(PIXABAY_API_ADDRESS + PIXABAY_API_KEY + PIXABAY_API_ENDPOINT + DESTINATION_3).then(onResponse).then(change_img_3);
fetch(PIXABAY_API_ADDRESS + PIXABAY_API_KEY + PIXABAY_API_ENDPOINT + DESTINATION_4).then(onResponse).then(change_img_4);
fetch(PIXABAY_API_ADDRESS + PIXABAY_API_KEY + PIXABAY_API_ENDPOINT + DESTINATION_5).then(onResponse).then(change_img_5);


