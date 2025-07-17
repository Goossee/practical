document.addEventListener('DOMContentLoaded', function() {
// Массив изображений для слайдера
    const images = [
        'https://i.pinimg.com/originals/d3/71/2b/d3712bb23cf4e191e65cf938d55e8982.jpg',
        'https://i.pinimg.com/736x/52/d5/85/52d58536c27c472994567c03a4071785.jpg',
        'https://i.pinimg.com/736x/6a/79/cf/6a79cf4ba0f8af5f5f5e34668a3d5ef4.jpg',
        'https://steamuserimages-a.akamaihd.net/ugc/1806529912255160538/5F20B565707FF4F5E5F6E0E5E4C47A297B08161D/?imw=512&amp;imh=341&amp;ima=fit&amp;impolicy=Letterbox&amp;imcolor=%23000000&amp;letterbox=true',
        'https://i.pinimg.com/originals/ea/a5/2a/eaa52a8fd3f3fba592f78cac1eed2a71.jpg'
    ];
// поиск элементов
    const slider = document.querySelector('.slider');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const counter = document.querySelector('.slider-counter');

    let currentIndex = 0;

// Создаем слайды
    images.forEach((image, index) => {
        const slide = document.createElement('div');
        slide.className = 'slide';
        slide.innerHTML = `<img src="${image}" alt="Изображение ${index + 1}">`;
        slider.appendChild(slide);
    });

// позиция слайдера и счетчик
    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        counter.textContent = `Изображение ${currentIndex + 1} из ${images.length}`;
    }

// Переход к следующему слайду
    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlider();
    }

// Переход к предыдущему слайду
    function prevSlide() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlider();
    }

    //кнопоки
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // слайдер готовность
    updateSlider();
});