console.log('fetching...');
fetch('http://localhost:3000')
    .then(response => response.text())
    .then(response => {
        document.body.textContent = response;
    });
