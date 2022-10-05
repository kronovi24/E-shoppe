var menu_btn = document.querySelector("#menu-btn");
var sidebar = document.querySelector("#sidebar");
var container = document.querySelector(".my-container");

menu_btn.addEventListener("click", () => {
    sidebar.classList.toggle("active-nav");
    container.classList.toggle("active-cont");
});

// query select item-list
var main_item = document.querySelector(".item-list");
//headsets data
var head_name = [
    "ATH-S220BT",
    "Aeorx-12",
    "Razor7",
    "Zerg-G",
    "A4-core",
    "Beatz-8",
    "Aimz32",
    "R7-aero",
    "GTX9",
];
var head_info = [
    "High quality Wireless headphone for everyday use",
    "Bass boosted for best music experience",
    "Wireless gaming headphone for better gaming experience",
    "High quality Wireless headphone for everyday use",
    "Bass boosted for best music experience",
    "Wireless gaming headphone for better gaming experience",
    "High quality Wireless headphone for everyday use",
    "Bass boosted for best music experience",
    "Wireless gaming headphone for better gaming experience",
];
var head_price = [
    "$13.40",
    "$11.50",
    "$10.40",
    "$63.40",
    "$13.40",
    "$23.40",
    "$63.40",
    "$23.40",
    "$13.40",
];

//keyboard data
var key_name = [
    "Logotik-28",
    "Master-Xy",
    "Zeon-tech7",
    "ArmTech",
    "dark-Z",
    "Armor Black",
    "32 zen",
    "Rtx Px",
    "GenZ LX",
];
var key_info = [
    "High quality mechanical keyboard for great experience",
    "Gaming mechanical keyboard for better gameplay",
    "Mechanical keyboard with clicky keys for everyday use",
    "High quality mechanical keyboard for great experience",
    "Gaming mechanical keyboard for better gameplay",
    "Mechanical keyboard with clicky keys for everyday use",
    "High quality mechanical keyboard for great experience",
    "Gaming mechanical keyboard for better gameplay",
    "Mechanical keyboard with clicky keys for everyday use",
];
var key_price = [
    "$33.40",
    "$23.40",
    "$63.40",
    "$23.40",
    "$13.40",
    "$43.40",
    "$11.50",
    "$20.40",
    "$63.40",
];

//microphone data
var micro_name = [
    "Super pro Bass",
    "Bass-Xy",
    "Zeon-Tone7",
    "Arm Mirco",
    "dark Micro",
    "Gen-32 tune",
    "32 zen",
    "G-tune38",
    "LX7000",
];
var micro_info = [
    "High quality microphone for great experience",
    "Best Desktop microphone for better gameplay",
    "Desktop microphone good for for everyday use",
    "High quality microphone for great experience",
    "Best Desktop microphone for better gameplay",
    "Desktop microphone good for for everyday use",
    "High quality microphone for great experience",
    "Best Desktop microphone for better gameplay",
    "Desktop microphone good for for everyday use",
];
var micro_price = [
    "$31.40",
    "$13.40",
    "$41.40",
    "$21.40",
    "$15.40",
    "$68.40",
    "$16.50",
    "$31.40",
    "$61.40",
];

//mouse data
var mouse_name = [
    "Super pro Bass",
    "Bass-Xy",
    "Zeon-Tone7",
    "Arm Mirco",
    "dark Micro",
    "Gen-32 tune",
    "32 zen",
    "G-tune38",
    "LX7000",
];
var mouse_info = [
    "High quality microphone for great experience",
    "Best Desktop microphone for better gameplay",
    "Desktop microphone good for for everyday use",
    "High quality microphone for great experience",
    "Best Desktop microphone for better gameplay",
    "Desktop microphone good for for everyday use",
    "High quality microphone for great experience",
    "Best Desktop microphone for better gameplay",
    "Desktop microphone good for for everyday use",
];
var mouse_price = [
    "$31.40",
    "$13.40",
    "$41.40",
    "$21.40",
    "$15.40",
    "$68.40",
    "$16.50",
    "$31.40",
    "$61.40",
];


//display headphone
function addHeadset() {
    main_item.innerHTML = "";
    for (x = 0; x < 9; x++) {
        main_item.insertAdjacentHTML(
            "beforeend",
            `<div class="item col-lg-3 col-md-5 col-sm-5 col-5">
                <div class="card">
                    <img src=" assets/headphones/${x}.jpg" class="item-pic card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${head_name[x]}</h5>
                        <p class="card-text">${head_info[x]}</p>
                        <div class="ratings">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        </div>
                        <button class="glow-on-hover" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <i class='bx bx-cart-download'></i> Buy Now
                        </button>
                        <span class="price">${head_price[x]}</span>
                    </div>
                </div>
            </div>`
        )
        console.log("added1")
    }
}

// display keyboards
function addKeyboards() {
    main_item.innerHTML = "";
    for (y = 0; y < 9; y++) {
        main_item.insertAdjacentHTML(
            "beforeend",
            `<div class="item col-lg-3 col-md-5 col-sm-5 col-5">
                <div class="card">
                    <img src=" assets/keyboards/${y}.jpg" class="item-pic card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${key_name[y]}</h5>
                        <p class="card-text">${key_info[y]}</p>
                        <div class="ratings">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        </div>
                        <button class="glow-on-hover" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <i class='bx bx-cart-download'></i> Buy Now
                        </button>
                        <span class="price">${key_price[y]}</span>
                    </div>
                </div>
            </div>`
        )
        console.log("added1")
    }
}

// display microphone
function addMicrophone() {
    main_item.innerHTML = "";
    for (y = 0; y < 9; y++) {
        main_item.insertAdjacentHTML(
            "beforeend",
            `<div class="item col-lg-3 col-md-5 col-sm-5 col-5">
                <div class="card">
                    <img src=" assets/microphone/${y}.jpg" class="item-pic card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${micro_name[y]}</h5>
                        <p class="card-text">${micro_info[y]}</p>
                        <div class="ratings">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        </div>
                        <button class="glow-on-hover" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <i class='bx bx-cart-download'></i> Buy Now
                        </button>
                        <span class="price">${micro_price[y]}</span>
                    </div>
                </div>
            </div>`
        )
        console.log("added1")
    }
}

// display mouse
function addMouse() {
    main_item.innerHTML = "";
    for (y = 0; y < 9; y++) {
        main_item.insertAdjacentHTML(
            "beforeend",
            `<div class="item col-lg-3 col-md-5 col-sm-5 col-5">
                <div class="card">
                    <img src=" assets/mouse/${y}.jpg" class="item-pic card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${mouse_name[y]}</h5>
                        <p class="card-text">${mouse_info[y]}</p>
                        <div class="ratings">
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        <span class="fa fa-star checked"></span>
                        </div>
                        <button class="glow-on-hover" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            <i class='bx bx-cart-download'></i> Buy Now
                        </button>
                        <span class="price">${mouse_price[y]}</span>
                    </div>
                </div>
            </div>`
        )
        console.log("added1")
    }
}

addHeadset();

var headphone = document.querySelector("#headphone");
var keyboard = document.querySelector("#keyboard");
var micro = document.querySelector("#microphone");
var mouse = document.querySelector("#mouse");

keyboard.addEventListener("click", () => {
    addKeyboards();
});
headphone.addEventListener("click", () => {
    addHeadset();
});
micro.addEventListener("click", () => {
    addMicrophone();
});
mouse.addEventListener("click", () => {
    addMouse();
})