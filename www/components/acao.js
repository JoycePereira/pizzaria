$(document).on("click","#listar",function()){
  $(location).attr("href","lista.html");
});

$(document).on("click","salvar",function(){
    var parametros ={
      "sabor":$("#sabor").val(),
      "valor":$("#valor").val()
    };
$.ajax({
  type:"post", //como vou enviar os dados ao servidor
  url:" ", //para onde vou enviar
  data:parametros, //o que eu vou enviar
  //CASO esteja tudo certo executa esse código
  sucess: function(data){
    navigator.notification.alert(data);
    $("#sabor").val("");
    $("#valor").val("")
  },
  //caso algo esteja errado executa esse código
  error: function(data){
    navigator.notification.alert("Erro ao cadastrar!");

  
}
});
});