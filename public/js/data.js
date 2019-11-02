console.log('Mysql JS connected.')

 const thingSec  = document.querySelectorAll('.thingSec'),
       menuItems = document.querySelectorAll('.menuItem');

 function dataSwap(e){
    let  x        = this.parentElement;
    let  y        = x.parentElement;
    let  dataDiv = y.querySelector('.data');

    dataName = this.className.split(' ')[1];

    const name      = dataDiv.querySelector('.name'),
          genre     = dataDiv.querySelector('.genre'),
          imgSrc    = dataDiv.querySelector('.images'),
          desc      = dataDiv.querySelector('.desc'),
          date      = dataDiv.querySelector('.date'),
          songs     = dataDiv.querySelector('.popSongs');

    name.innerHTML = `{{${dataName}.name}}`;
    genre.innerHTML = `{{${dataName}.genre}}`;
    imgSrc.src      = `images/{{${dataName}.img}}`;
    desc.innerHTML = `{{${dataName}.description}}`;
    date.innerHTML = `{{${dataName}.date}}`;
    songs.innerHTML = `{{${dataName}.songs}}`;

    console.log("Data set to:" + dataName)
 }

menuItems.forEach(item => item.addEventListener('click', dataSwap));