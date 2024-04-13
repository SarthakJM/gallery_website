document.addEventListener("DOMContentLoaded", function () {
    const accessKey = 'jb1d__xaeH9AT5AtkOTh7YaV8KAUdVobFHxgcCSKooE';
    const count = 8; // Number of images you want to fetch
    const galleryItems = document.querySelectorAll('.gallery-item');

    fetch(`https://api.unsplash.com/photos/random?client_id=${accessKey}&count=${count}`)
        .then(response => response.json())
        .then(data => {
            galleryItems.forEach((item, index) => {
                item.src = data[index].urls.regular;
                item.alt = data[index].alt_description || 'Unsplash Image';
            });
        })
        .catch(error => {
            console.error('Error fetching images from Unsplash:', error);
        });
});

document.addEventListener("click", function (e) {
    if (e.target.classList.contains("gallery-item")) {
        const src = e.target.getAttribute("src");
        document.querySelector(".modal-img").src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
        myModal.show();
    }
});
