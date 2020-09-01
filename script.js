new Promise((resolve, reject) => {

    setTimeout(() => {
        resolve('ok')
    }, 3000)

}).then(res => {
document.getElementById('carregamento').innerHTML = '<h1>seja bem vindo a page</h1>'
})     