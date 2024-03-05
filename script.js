function limpar(){
    var a = document.getElementById("botao");
    var b = document.getElementById("mail").value = "";
    var c = document.getElementById("pass").value = "";
    const checkbox = document.getElementById("checkBox");
    checkbox.checked = false
}  
    document.addEventListener('keypress', function(event) {
        
        if (event.key === 'Enter') {
            var a = document.getElementById("botao");
            var b = document.getElementById("mail").value = "";
            var c = document.getElementById("pass").value = "";
            const checkbox = document.getElementById("checkBox");
            checkbox.checked = false
        }
    })

