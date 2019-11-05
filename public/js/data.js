console.log('Mysql JS connected.')

 const thingSec  = document.querySelectorAll('.thingSec'),
       menuItems = document.querySelectorAll('.menuItem');

 function dataSwap(e){
    let  x        = this.parentElement;
    let  y        = x.parentElement;
    let  dataDiv = y.querySelector('.data');

    dataName = this.className.split(' ')[1];
    console.log("Data set to: " + dataName)

    const name      = dataDiv.querySelector('.name'),
          genre     = dataDiv.querySelector('.genre'),
          imgSrc    = dataDiv.querySelector('.images'),
          desc      = dataDiv.querySelector('.desc'),
          songs     = dataDiv.querySelector('.popSongs'),
          date      = dataDiv.querySelector('.date');

    name.innerHTML = `{{${dataName}.name}}`;
    genre.innerHTML = `{{${dataName}.genre}}`;
    imgSrc.src      = `images/{{${dataName}.img}}`;
    desc.innerHTML = `{{${dataName}.description}}`;
    date.innerHTML = `{{${dataName}.date}}`;
    songs.innerHTML = `{{${dataName}.songs}}`;
 }

menuItems.forEach(item => item.addEventListener('click', dataSwap));