console.log("Let's get this party started!");

// Search for giphys
async function search(term) {
  const key = "sxsogY2tZb3AO6CTUrjNYAc0x0ZXEEtt";
  const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
    params: { q: term, api_key: key, rating: "g" },
  });
  // console.log(response.data.data);
  const results = response.data.data;
  // console.log(response.data.data);
  const pick = Math.floor(Math.random() * results.length);
  // console.log(response.data.data[pick].url);
  return response.data.data[pick].images.original.url;
}

// show giphy
async function showGiphy() {
  const gif = await getGiphy();
  const newDiv = $("<div>").addClass("gif-div");
  const newImg = $("<img>").attr("src", gif).addClass("gif");
  newDiv.append(newImg);
  $("#giphy-container").append(newDiv);
}

// Get giphy
async function getGiphy() {
  const searchTerm = $("#term").val();
  $("#term").val("");
  const gif = await search(searchTerm);
  return gif;
}

$("#giphy-form").on("submit", function (event) {
  event.preventDefault();
  if ($("#term").val()) {
    showGiphy();
  } else {
    $("#term").css("outline", "dotted");
    $("#term").css("outline-color", "white");
  }
});

$("#delete-all-btn").on("click", function (event) {
  $(".gif-div").remove();
});
