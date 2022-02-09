let form = document.getElementById("form")
form.addEventListener('submit', (e) => {
    e.preventDefault()
    let name = document.getElementById("name").value
    let body = document.getElementById("body").value
    let id = document.getElementById("id").value

    fetch('https://jsonplaceholder.typicode.com/posts', {
        // * Configuration object
        method: 'POST',
        body: JSON.stringify({
            title: name,
            body: body,
            userId: id,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));
})