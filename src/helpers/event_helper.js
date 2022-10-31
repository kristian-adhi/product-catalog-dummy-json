import $ from 'jquery';

export { custom_add_event_listener, button_carousel_handler }


function custom_add_event_listener(id, event, handler) {  
    document.getElementById(id).addEventListener(event, handler, false);
}

function button_carousel_handler() {
    const carousel = document.getElementById('banner-carousel')
    const items = carousel.querySelectorAll('.carousel-item');

    const carousel_indicator = document.getElementById('carousel-indicators')
    const items_indicator = carousel_indicator.querySelectorAll('.indicator-item');

    let currentItem = 0;
    let currentItemIndicator = 0;

    let isActive = true;
    let isActiveIndicator = true;
    
    function setCurrentItem(index) {
      currentItem = (index + items.length) % items.length;
    }

    function setCurrentItemIndicator(index) {
      currentItemIndicator = (index + items_indicator.length) % items_indicator.length;
    }
    
    function hideItem(direction) {
      isActive = false;

      items[currentItem].classList.add(direction);

      items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('active', direction);
      });

    }
  
    function hideItemIndicator(direction) {
      isActiveIndicator = false;

      items_indicator[currentItemIndicator].classList.add(direction);

      items_indicator[currentItemIndicator].addEventListener('animationend', function() {
        this.classList.remove('active', direction);
      });
    }


    function showItem(direction) {
      items[currentItem].classList.add('next', direction);

      items[currentItem].addEventListener('animationend', function() {
        this.classList.remove('next', direction);
        this.classList.add('active');
        isActive = true;
      });

      $('.next.from-right').toggleClass('active');
      $('.next.from-left').toggleClass('active');
    }


    function showItemIndicator(direction) {
      items_indicator[currentItemIndicator].classList.add('next', direction);  

      items_indicator[currentItemIndicator].addEventListener('animationend', function() {
        this.classList.remove('next', direction);
        this.classList.add('active');
        isActiveIndicator = true;
      });

    }

    
    document.getElementById('btn-prev-slide').addEventListener('click', function(e) {
      e.preventDefault()

      if (isActive) {
        hideItem('to-right');
        setCurrentItem(currentItem - 1);
        showItem('from-left');
      }

      if (isActiveIndicator) {
        hideItemIndicator('to-right');
        setCurrentItemIndicator(currentItemIndicator - 1);
        showItemIndicator('from-left');
      }

    });
    
    document.getElementById('btn-next-slide').addEventListener('click', function(e) {
      e.preventDefault()
      
      if (isActive) {
        hideItem('to-left');
        setCurrentItem(currentItem + 1);
        showItem('from-right');
      }

      if (isActiveIndicator) {
        hideItemIndicator('to-left');
        setCurrentItemIndicator(currentItemIndicator + 1);
        showItemIndicator('from-right');
      }

    });
}