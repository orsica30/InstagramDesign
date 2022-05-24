const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    // And if we need scrollbar
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    observer: true,
    observeParents: true,
  });

  // Codigo para posting

  let arreglo = [`<p><b>Lucas Credie</b> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt</p>`];

  let containerPost = document.getElementById("container-fluid");
  let input = document.getElementById("post");

  let show = () => {
    let text = "";

    for (const texto of arreglo) {
      text += `<p>${texto}</p>`;
    }

    containerPost.innerHTML = text;
  };

  let handleAdd = () => {
    if (input.value == "" || input.value == null) {
    } else {
      let nuevo = `<b>Comment</b> ${input.value}`;
      arreglo = [...arreglo, nuevo];
      input.value = "";
      console.log(arreglo);
      show();
    }
  };

  let heart1 = document.getElementById("heart1");
  let heart2 = document.getElementById("heart2");

  let change = () => {
    if (heart2.style.display === "none") {
      heart1.style.display = "none";
      heart2.style.display = "block";
    } else {
      heart1.style.display = "block";
      heart2.style.display = "none";
    }
  };

  let carousel = document.getElementById("carousel");

  let getImages = async () => {
    let api_url = await fetch(
      `https://picsum.photos/v2/list?page=2&limit=10`
    );
    let data = await api_url.json();

    let images = data.map((pic) => {
      return pic.download_url;
    });

    console.log(images);
    let test = "";
    for (const ima of images) {
      test += `<div class="swiper-slide">
              <img src="${ima}" alt="carousel-img" style='width: 100%; height: 100%'/>
            </div>`;
    }

    carousel.innerHTML = test;
  };
  getImages();