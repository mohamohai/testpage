document.addEventListener('DOMContentLoaded', function () {
    // 슬라이드에 따른 설명 텍스트를 배열로 정의합니다.
    var slideName = [
        'VROZ',
        'DEVAMOND',
        'DISTRIBUTION'
    ];
    var slideDescriptions = [
        'VROZ 소개',
        'DEVAMOND 소개',
        'DISTRIBUTION 소개'
    ];
    var swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        slidesPerView: 1,
        mousewheel: true,
        keyboard: true,
        autoplay : true, 
        // 슬라이드가 변경될 때마다 실행되는 콜백 함수를 정의합니다.
        on: {
            slideChange: function () {
                var index = this.activeIndex;
                console.log(index)
                var serviceName = document.getElementById('serviceName');
                var description = document.getElementById('serviceEx'); // 설명 텍스트 요소를 가져옵니다.
                serviceName.textContent = slideName[index];
                description.textContent = slideDescriptions[index]; // 설명 텍스트를 변경합니다.
            },
        },
    });

    // 초기 텍스트를 설정합니다.
    document.getElementById('serviceName').textContent = slideDescriptions[swiper.activeIndex];
    document.getElementById('serviceEx').textContent = slideDescriptions[swiper.activeIndex];
});