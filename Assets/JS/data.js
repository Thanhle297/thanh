let product = {
    data:[
        {
            image: "https://r73troypb4obj.vcdn.cloud/website02/uploads/pictures/62318e151a1b854d4e902242/content_danh-gia-truong-thpt-a-phu-ly-ha-nam-co-tot-khong__3_.jpg",
            text: "Đánh giá trường THPT A Phủ Lý",
            subtext:"đây là đánh giá",
        },
        {
            image: "https://r73troypb4obj.vcdn.cloud/website02/uploads/pictures/62318d8f1a1b854d4e90223f/content_danh-gia-truong-thpt-a-phu-ly-ha-nam-co-tot-khong.jpg",
            text: "Đánh giá trường THPT A Phủ Lý",
            subtext:"đây là đánh giá",
        },
        {
            image: "https://phuly.hanamtv.vn/uploads/news/2022_11/1_14.jpg",
            text: "Đánh giá trường THPT A Phủ Lý",
            subtext:"đây là đánh giá",
        },
    ]
}

for (let i of product.data){
    let card = document.createElement("div");
    card.classList.add("card");
    
    let imgcontainer =document.createElement("div");
    imgcontainer.classList.add("img-container");

    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgcontainer.appendChild(image);
    card.appendChild(imgcontainer);

    let containers =document.createElement("div");
    containers.classList.add("card");

    let name = name.createElement("h4");
    name.classList.add("product-name");
    name.innerText = i.text.toUpperCase;
    containers.appendChild(name);

    let sub = document.createElement("h5");
    sub.innerText = i.subtext;
    containers.appendChild(sub);

    card.appendChild(containers);
    document.getElementById("container").appendChild("card");
}