//////////////////////////////////////////////////////////////CAT STUFF
const catheaders = new Headers({
    "Content-Type": "application/json",
    "x-api-key": "live_DIDqEVjM7ghBSvnSAIhcLAd3ee3rKimq2qDxBNUrP6WJxKjXbn8rCITGJaBBZzEB"
});

var catrequestOptions = {
    method: 'GET',
    catheaders: catheaders,
    redirect: 'follow'
};
async function catfetchData(element) {
    try {
        const response = await fetch("https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1", catrequestOptions);
        const result = await response.json();
        const imageUrl = result[0]["url"];
        console.log(imageUrl)
        document.getElementById(element).src = imageUrl;
        console.log(result);
    } catch (error) {
        console.log('error', error);
    }
}
catfetchData('cat');
catfetchData('cat2');

//////////////////////////////////////////////////////////////NEWS STUFF
const apiKey = '30ee941560684fde93ec9df3b5b8c8a5';
fetch('https://newsapi.org/v2/top-headlines?country=pt', {
    headers: {
        'x-api-key': apiKey
    }
})
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the response body as JSON
    })
    .then(data => {
        console.log(data["articles"][0]);
        document.getElementById("article1").textContent = data["articles"][0][""];
        document.getElementById("article2").textContent = data["articles"][1];
        document.getElementById("article3").textContent = data["articles"][2];
        document.getElementById("article4").textContent = data["articles"][3];
        document.getElementById("article5").textContent = data["articles"][4];
    })
    .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
    });