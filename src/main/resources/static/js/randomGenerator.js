function loadDogImage() {
    const imageUrls = [
        "https://randompicturegenerator.com/img/dog-generator/ge2b8c2488b2ccc272d8e61f7470df4cdce61fe28ea13f8d3c0e368f52a539c52e30690f8be001bd043f3219612ad289b_640.jpg",
        "https://randompicturegenerator.com/img/dog-generator/ga909edd1f3f716f9d9df2eaa451d63628c57b2fffc7921460641327ac3c345706c293664fa0fca146ee84311578a4ea9_640.jpg",
        "https://randompicturegenerator.com/img/dog-generator/g55e9922a6fed0a1241e3f727698432e8101105e21feadac426898693e200f73fb1672892ba68e86ba10af641f035bf5f_640.jpg",
        "https://randompicturegenerator.com/img/dog-generator/gdfcd9e9c7d85646c8df6eb3ddf9b31ce216094f5912d22ca2b416d6f303d93ae696fc29ee4de3f603c837beedaf4c57e_640.jpg",
        "https://randompicturegenerator.com/img/dog-generator/g3e6fbc7412aa495257892bc4898b7798e06e2f56617e789e7454626201a8e9e23e24447764138237ceb0662d988781df_640.jpg"
    ];

    const container = document.getElementById("imageContainer");
    container.innerHTML = ""; // Clear previous images

    // Generate a random index to pick a random image URL
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const randomImageUrl = imageUrls[randomIndex];

    // Create an image element and set its attributes
    const img = document.createElement("img");
    img.src = randomImageUrl;
    img.alt = "Random Dog Image";

    // Append the image to the container
    container.appendChild(img);
}

//loading cat pictures using loops
function loadCatImages() {

    const imageUrls = [
        "https://randompicturegenerator.com/img/cat-generator/g29d311fe73384a37d522c4a9f961a3b0d683cb233cf837cc42e97a7bda6888625880a391ff4deb10f9c7a75f5dd75128_640.jpg",
        "https://randompicturegenerator.com/img/cat-generator/gc3818bc5b01d25f5c8a85ac5119da32eef6a98bc940d35a37e787540e5c429fcef937904b1773884417045ea94cbd6e9_640.jpg",
        "https://randompicturegenerator.com/img/cat-generator/g37b82da0af399ee430f5787f93289fa6bf0cee78a334568707574b938b0c2dd44c1e6505904a70b5cb55dbb1f3116639_640.jpg",
        "https://randompicturegenerator.com/img/cat-generator/g592fd2a3832b70794aaca8595cfafc335ddd8738e3d01261e608f6f4ee8b0d24a1984c8bc6377ecd5b3463e6329c139d_640.jpg",
        "https://randompicturegenerator.com/img/cat-generator/g9ea3ca2bfd45b753baa87780a8b59facab4e73bcd598e621e62f5c5e6863827f4527030f937c2f8c61ce3bae42726df9_640.jpg",
        "https://randompicturegenerator.com/img/cat-generator/g8be4f19009a23cb99f2d8ccf42cdc37eb756f6e38227a98e467104acc0e2b549e85bd547762fc005ad4966ca0c6d5356_640.jpg",
        "https://randompicturegenerator.com/img/cat-generator/g94e8f5b127f379ba563d00338aba27460ee89b602567fb12d27ab4a7ef4f6b48c5513ba23a6bc7dde7d0b5a5d29ab393_640.jpg",
        "https://randompicturegenerator.com/img/cat-generator/ga66c1874a1157afff5e0f4929f258841d987b032cb591f5f1f99c33de7d556c8c1738e7d7741da933787e434de36fe56_640.jpg",
        "https://randompicturegenerator.com/img/cat-generator/g7e1c08504f676a43ef1b698935f46e6dc88cea5be9b2ced450d6524af00718587cc42a6533ff6001005e36d477a4e6cd_640.jpg",
        "https://randompicturegenerator.com/img/cat-generator/gffac7d89a6766193920012ecea55e5faf3d8494670322109af3ec828743b7462bd13326ea1d2f24cc64e871021abab1b_640.jpg",
        "https://randompicturegenerator.com/img/cat-generator/g2e8da18aee0bd8533f06fe46380c8718b0d6ecc247cd1beac557398fdda887c8b3c1db248822716206c61ef822daddd1_640.jpg",
    ];


    //Get all image tags
    const imageElements = document.getElementsByTagName('img');
    //loop through collection of image tags:
    for(let i =0; i < imageElements.length; i++){
        // Generate a random index to pick a random image URL
        const randomIndex = Math.floor(Math.random() * imageUrls.length);

        //add the src and alt to image tage
        imageElements[i].src = imageUrls[randomIndex];
        imageElements[i].alt = "Random Cat Image";
    }

}