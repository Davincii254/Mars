document.addEventListener("DOMContentLoaded", function(){
    testJs()
    findPhotos()
    // get photo of the day
})
function testJs(){
    
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=8RVaXYWs7HPc5GqaGjAhbPrTREKfzezB4YslyNTp")
        .then((resp)=> resp.json())
        .then((data)=>{
            // console.log(data.data.memes)
            renderPhotos(data.data.photos)           
        })
}

const container = document.getElementById('container')

const photos=[]

function findPhotos(){
    alert("HWelcome Martian")
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=8RVaXYWs7HPc5GqaGjAhbPrTREKfzezB4YslyNTp")
        .then((resp)=>resp.json())
        .then((data)=>{
            data.map((photos)=>{
                getMarss(photos)
            })
        })   
}

function getMarss(){
    console.log(data)
    console.log(container)
    const container = container
    const pics = data
    console.log("Martian Picture Received succesfully")
}