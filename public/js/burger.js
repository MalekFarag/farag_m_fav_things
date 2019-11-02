console.log('JS fired.')

const burger  = document.querySelector('.burger'),
      bLine   = document.querySelector('.mLine'),
      header  = document.querySelector('.mobileHead'),
      nav     = document.querySelector('.mainNav'),
      navList = document.querySelector('.navList');


      function toggleNav(){
          bLine.classList.toggle('open');
          navList.classList.toggle('move');
          header.classList.toggle('bg');
          nav.classList.toggle('on');
          console.log('Nav toggled.');
      }
      
      burger.addEventListener('click', toggleNav);