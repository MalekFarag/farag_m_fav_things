   const menuItems = document.querySelectorAll('.menuItem');

        function dataSwap(e){
            let  x        = this.parentElement;
            let  y        = x.parentElement;
            let  dataDiv = y.querySelectorAll('.data');

            let dataName  = this.className.split(' ')[1];
            console.log("Data set to: " + dataName);

            let targetDiv = y.querySelectorAll('.' + dataName);

            dataDiv[0].classList.add('hidden');
            dataDiv[1].classList.add('hidden');
            dataDiv[2].classList.add('hidden');

            targetDiv[1].classList.remove('hidden');
        }
        menuItems.forEach(item => item.addEventListener('click', dataSwap));






// console.log('Mysql JS connected.')

//  const thingSec  = document.querySelectorAll('.thingSec'),
//        menuItems = document.querySelectorAll('.menuItem');

//  function dataSwap(e){
//     let  x        = this.parentElement;
//     let  y        = x.parentElement;
//     let  dataDiv = y.querySelector('.data');

//     dataName = this.className.split(' ')[1];
//     console.log("Data set to: " + dataName)

//     const name      = dataDiv.querySelector('.name'),
//           genre     = dataDiv.querySelector('.genre'),
//           imgSrc    = dataDiv.querySelector('.images'),
//           desc      = dataDiv.querySelector('.desc'),
//           songs     = dataDiv.querySelector('.popSongs'),
//           date      = dataDiv.querySelector('.date');

//     name.innerHTML = `{{${dataName}.name}}`;
//     genre.innerHTML = `{{${dataName}.genre}}`;
//     imgSrc.src      = `images/{{${dataName}.img}}`;
//     desc.innerHTML = `{{${dataName}.description}}`;
//       if(dataDiv.classList.contains("music")){
//         songs.innerHTML = `{{${dataName}.songs}}`;  
//       }

//       if(dataDiv.classList.contains("games")){
//             date.innerHTML = `{{${dataName}.date}}`;
//       }
//  }

// menuItems.forEach(item => item.addEventListener('click', dataSwap));