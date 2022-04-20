function myFunction(imgs) {
    // Gets users expanded image
    var expandImg = document.getElementById("expandedImg");
    // Gets users image text
    var imgText = document.getElementById("imgtext");
    // Uses the same source in the expanded image as the image being clicked on
    expandImg.src = imgs.src;
    // Uses the value of the alt attribute of the clickable image as text inside the expanded image
    imgText.innerHTML = imgs.alt;
    // Show the container element (hidden with CSS)
    expandImg.parentElement.style.display = "block";
  }

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'dark-sky.p.rapidapi.com',
      'X-RapidAPI-Key': 'beb2f23eeemsha49757c685935a1p13b3b1jsn4d0e15d38175'
    }
  };
  
  fetch('https://dark-sky.p.rapidapi.com/%7Blatitude%7D,%7Blongitude%7D?units=auto&lang=en', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));