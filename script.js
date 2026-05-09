const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {

  item.addEventListener('click', () => {
    item.classList.toggle('active');
  });

});

const buyBtn = document.getElementById('buyBtn');

buyBtn.addEventListener('click', function(e){

  e.preventDefault();

  alert(
    'Replace this BUY NOW button link with your Stakecut checkout URL.'
  );

});
