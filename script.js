//const interval = 700;
// store carousel's image location
const image=[];
let img_index = 0;
image[0]= "https://i2-prod.mirror.co.uk/incoming/article1850849.ece/ALTERNATES/s1200d/Dortmund-vs-Hamburg.jpg";
image[1]="https://i.guim.co.uk/img/media/117b87e6c44df446c256ff53a0a18a2f3cb20727/337_263_5534_3319/master/5534.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=4a54ec315beb0ec6302b285988bf1e89";
image[2]="https://image.freepik.com/free-vector/covid-19-novel-coronavirus-latest-news-banner-template_1017-24548.jpg";
image[3]="https://scd.infomigrants.net//media/resize/my_image_big/2a7632b04e27d617ccfa2b69f53541618bdcc13a.jpeg";
let img_index_max = image.length -1;
// store carousel's header text
let img_text =[];
img_text[0] ="Volksfutbol! How German football stays a true game of the people";
img_text[1] ="The SPD, Greens and FDP want to form a government";
img_text[2] ="Global progress against measles threatened amidst COVID-19 pandemic ";
img_text[3] ="Young Afghan man deported as he prepares to marry German";
//const arrowLeft = document.getElementById("left-arrow");
//const arrowRight = document.getElementById("right-arrow");
const carousel = document.getElementById("carousel-img");
const carousel_text = document.getElementById("carousel-txt");
// loading default image to carousel
carousel.style.backgroundImage="url("+ image[0] +")";
carousel_text.innerText = img_text[0];
function nextimg(para) {
    switch (para) {
        case 'l':
            img_index--;
            break;
            
            case 'r':
                img_index++;
                break;
            }
    if (img_index <= 0) {
        img_index = 0;
    }
    else if(img_index >= img_index_max){
        img_index = img_index_max;
    }
    carousel.style.backgroundImage="url("+ image[img_index] +")";
    carousel_text.innerText = img_text[img_index];
    // console.log(img_index);
}