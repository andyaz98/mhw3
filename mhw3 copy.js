const IMG_SEARCH_ENDPOINT= "https://pixabay.com/api/?key=26977655-8b2ac2c28da32df2535161a8d&q=";
const paragraphs=document.querySelectorAll("section .paragraph");


const images={
    '1':null,
    '2':null,
    '3':null,
    '4':null,
    '5':null
}

function onResponse(response){
    return response.json();
}

function onJson(json){
    
    
    const index=Math.floor(Math.random()*json.hits.length);
    const img=json.hits[index].largeImageURL;
    
    for(let image in images){
        if(images[image]==null){
            images[image]=img;
            break;
        }
    }
    console.log(images);
    
    if(images[5]!=null){
        updateImages();
    }
}

function updateImages(){

    document.querySelector("img[data-paragraph-number='1']").src=images[1];
    document.querySelector("img[data-paragraph-number='2']").src=images[2];
    document.querySelector("img[data-paragraph-number='3']").src=images[3];
    document.querySelector("img[data-paragraph-number='4']").src=images[4];
    document.querySelector("img[data-paragraph-number='5']").src=images[5];

    for(let image in images){
        images[image]=null;
    }

    
}



for(let paragraph of paragraphs){
    
    fetch(IMG_SEARCH_ENDPOINT+paragraph.dataset.destination).then(onResponse).then(onJson);
    console.log(paragraph.dataset.destination)
}