const title = document.getElementById('advice_title')
const content = document.getElementById('advice_content')


async function logJSONData() {
    const response = await fetch("https://api.adviceslip.com/advice");
    const jsonData = await response.json();
    title.innerHTML = `ADVICE #${jsonData.slip.id}`;
    content.innerHTML = `"${jsonData.slip.advice}"`;
}