let product = {
    data: [
        {
            image: "https://r73troypb4obj.vcdn.cloud/website02/uploads/pictures/62318e151a1b854d4e902242/content_danh-gia-truong-thpt-a-phu-ly-ha-nam-co-tot-khong__3_.jpg",
            text: "Đánh giá trường THPT A Phủ Lý",
            subtext: "đây là đánh giá",
        },
        {
            image: "https://phuly.hanamtv.vn/uploads/news/2022_11/1_14.jpg",
            text: "Đánh giá trường THPT A Phủ Lý",
            subtext: "đây là đánh giá",
        },
        {
            image:"https://scontent.fhan2-4.fna.fbcdn.net/v/t39.30808-6/458602713_1034383191806577_426667522684250421_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG_mTS15flA5GVog30gUpJ_j58Xbz2EUwOPnxdvPYRTA5eenSrgKFKebiPaVFj9aiG1qkSz6kTMqBygg-FV5YFk&_nc_ohc=XfY9PntuAPkQ7kNvgGiruaL&_nc_ht=scontent.fhan2-4.fna&_nc_gid=AYMXoW0RBirscW7H8YtWMkU&oh=00_AYBmDfz3C39tQp98HwJqRWgRjSBOSYMHR9JxZRcZ-o32nw&oe=66F04A35",
            text: "NIỀM VUI NGÀY KHAI TRƯỜNG NĂM HỌC 2024-2025",
            subtext:"Hoà chung không khí tưng bừng, phấn khởi của Ngày hội toàn dân đưa trẻ tới trường ",
        },
    ]
}

for (let i of product.data) {
    let card = document.createElement("div");
    card.classList.add("card");
    
    let imgcontainer = document.createElement("div");
    imgcontainer.classList.add("img-container");

    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgcontainer.appendChild(image);
    card.appendChild(imgcontainer);

    let containers = document.createElement("div");
    containers.classList.add("container"); // Đổi class từ "card" thành "container"

    let name = document.createElement("h4");
    name.classList.add("product-name");
    name.innerText = i.text.toUpperCase();
    containers.appendChild(name);

    let sub = document.createElement("h5");
    sub.innerText = i.subtext;
    containers.appendChild(sub);

    card.appendChild(containers);
    document.getElementById("container").appendChild(card);
}
