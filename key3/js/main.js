document.addEventListener('DOMContentLoaded', function() {
            const slider = document.querySelector('.slider');
            const slides = document.querySelectorAll('.slide');
            const prevBtn = document.querySelector('.prev-btn');
            const nextBtn = document.querySelector('.next-btn');
            const counter = document.querySelector('.counter');
            
            let currentIndex = 0;
            const totalSlides = slides.length;
            
            // Устанавливаем начальную позицию
            updateSlider();
            
            
            prevBtn.addEventListener('click', goToPrevSlide);
            nextBtn.addEventListener('click', goToNextSlide);
            
            
            function goToPrevSlide() {
                currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
                updateSlider();
            }
            
            // переход к следующему слайду
            function goToNextSlide() {
                currentIndex = (currentIndex + 1) % totalSlides;
                updateSlider();
            }
            
            // Обновление слайдера и счетчика
            function updateSlider() {
                slider.style.transform = `translateX(-${currentIndex * 100}%)`;
                counter.textContent = `Изображение ${currentIndex + 1} из ${totalSlides}`;
            }
            
            // клава тык тык
            document.addEventListener('keydown', function(e) {
                if (e.key === 'ArrowLeft') {
                    goToPrevSlide();
                } else if (e.key === 'ArrowRight') {
                    goToNextSlide();
                }
            });
        });