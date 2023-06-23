const title = document.getElementById('advice_title')
const content = document.getElementById('advice_content')


async function logJSONData() {
    await fetch("https://api.adviceslip.com/advice")
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao obter os dados. Código de status:' + response.status)
                }
                return response.json()
                })

        .then(JsonResponse =>{
            title.innerHTML = `ADVICE #${JsonResponse.slip.id}`;
            content.innerHTML = `"${JsonResponse.slip.advice}"`;
        })
        .catch(error => {
            console.log(error)
        })

}