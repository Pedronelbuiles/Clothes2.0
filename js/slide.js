/* Variables */
var item = 0;
var itemPaginacion = $("#paginacion li");
var interrumpirCiclo = false;

/* paginación */

$("#paginacion li").click(function(){

	item = $(this).attr("item")-1;
	movimientoslide(item);
})

/* funcion avanzar */

function avanzar(){

	if(item == 3){
		item = 0;
	}else{
		item++
	}
	movimientoslide(item);

}

/* movimiento avanzar */

$("#slide #avanzar").click(function(){

	avanzar();
})

/* movimiento retroceder */

$("#slide #retroceder").click(function(){

	if(item == 0){
		item = 3;
	}else{
		item--
	}
	movimientoslide(item);
})

/* Movimiento del Slide */

function movimientoslide(item){
	$("#slide ul").animate({"left": item * -100 + "%"},1000)
	$("#paginacion li").css({"opacity":.5})
	$(itemPaginacion[item]).css({"opacity":1})
	interrumpirCiclo = true;
}

/* intervalo de tiempo */

setInterval(function(){
	if (interrumpirCiclo) {
		interrumpirCiclo = false;
	}else{
		avanzar();
	}
},3000)