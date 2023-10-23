export async function getPhotographerId() {
  const str = window.location.href;
const url = new URL(str);
var search_params = new URLSearchParams(url.search);

    if (search_params.has("id")) {
      var id = search_params.get("id");
      console.log(id, "is the id query");
      let data = await getData()
      let dataPhotograph
      data.photographers.forEach((e) => {
        if (e.id === Number(id)) {
          console.log("we got a match => we can set up a photographer");
           dataPhotograph = e;
          return dataPhotograph
        }
      });
      return dataPhotograph
    }
}



export async function getData (){
    let data = await fetch("../../data/photographers.JSON")
          .then((res) => res.json())
          .then((data) => data)
          return data
  
}

