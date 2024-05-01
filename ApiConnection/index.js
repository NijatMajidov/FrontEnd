let list = document.getElementById("list")
axios("https://api.tvmaze.com/shows")
.then(res => {
    console.log(res);
    for (let index = 0; index < res.data.length; index++) 
    {
        list.innerHTML += `<div class="card mb-3" style="padding:0px; margin:5px; width: 18rem;">
            <img src="${res.data[index].image.medium}" class="card-img-top" alt="..." style="max-width: 100%;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;>
            <div class="card-body " >
              <h5 class="card-title text-center" >${res.data[index].name}</h5>
              <p class="card-text">${res.data[index].summary}</p>
              <a href="${res.data[index].url}" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>`
    }
})

