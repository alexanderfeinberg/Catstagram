// Your code here
window.onload = async () => {
    const url = await fetch("https://api.thecatapi.com/v1/images/search")
    const image = JSON.parse(await url.text())[0].url
    console.log(image)

    const newElement = document.createElement("img")
    newElement.setAttribute("src", image)
    document.body.append(newElement)
}
