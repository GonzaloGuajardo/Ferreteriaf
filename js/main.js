$(document).ready(function(){
	/*Mostrar ocultar area de notificaciones*/
	$('.btn-Notification').on('click', function(){
        var ContainerNoty=$('.container-notifications');
        var NotificationArea=$('.NotificationArea');
        if(NotificationArea.hasClass('NotificationArea-show')&&ContainerNoty.hasClass('container-notifications-show')){
            NotificationArea.removeClass('NotificationArea-show');
            ContainerNoty.removeClass('container-notifications-show');
        }else{
            NotificationArea.addClass('NotificationArea-show');
            ContainerNoty.addClass('container-notifications-show');
        }
    });
    /*Mostrar ocultar menu principal*/
    $('.btn-menu').on('click', function(){
    	var navLateral=$('.navLateral');
    	var pageContent=$('.pageContent');
    	var navOption=$('.navBar-options');
    	if(navLateral.hasClass('navLateral-change')&&pageContent.hasClass('pageContent-change')){
    		navLateral.removeClass('navLateral-change');
    		pageContent.removeClass('pageContent-change');
    		navOption.removeClass('navBar-options-change');
    	}else{
    		navLateral.addClass('navLateral-change');
    		pageContent.addClass('pageContent-change');
    		navOption.addClass('navBar-options-change');
    	}
    });
    /*Salir del sistema*/
    $('.btn-exit').on('click', function(){
    	swal({
		  	title: '¿Quieres salir del sistema?',
		 	text: "La sesión actual se cerrará y abandonará el sistema.",
		  	type: 'warning',
		  	showCancelButton: true,
			cancelButtonText: 'Cancelar',
		  	confirmButtonText: 'Si, salir',
		  	closeOnConfirm: false
		},
		function(isConfirm) {
		  	if (isConfirm) {
		    	window.location='index.html'; 
		  	}
		});
    });
	$('.BedMenOp').on('click', function(){
    	swal({
			title: 'Desea editar',
		 	// text: "La sesión actual se cerrará y abandonará el sistema.",
			icon: 'question',
			showCancelButton: true,
			cancelButtonText: 'Cancelar',
			confirmButtonText: 'Continuar',
			closeOnConfirm: false
		},
		function(isConfirm) {
		  	if (isConfirm) {
				location.reload(true);
		    	// window.location='products.html'; 
		  	}
		});
    });
	$('.BelMenOp').on('click', function(){
    	swal({
		  	title: 'Desea eliminar',
		 	// text: "¿Esta seguro que desea eliminar?",
		  	type: 'warning',
		  	showCancelButton: true,
			cancelButtonText: 'Cancelar',
		  	confirmButtonText: 'Confirmar',
		  	closeOnConfirm: false
		},
		function(isConfirm) {
		  	if (isConfirm) {
				location.reload(true);
		    	// window.location='index.html'; 
		  	}
		});
    });
    /*Mostrar y ocultar submenus*/
    $('.btn-subMenu').on('click', function(){
    	var subMenu=$(this).next('ul');
    	var icon=$(this).children("span");
    	if(subMenu.hasClass('sub-menu-options-show')){
    		subMenu.removeClass('sub-menu-options-show');
    		icon.addClass('zmdi-chevron-left').removeClass('zmdi-chevron-down');
    	}else{
    		subMenu.addClass('sub-menu-options-show');
    		icon.addClass('zmdi-chevron-down').removeClass('zmdi-chevron-left');
    	}
    });
});
(function($){
        $(window).on("load",function(){
            $(".NotificationArea, .pageContent").mCustomScrollbar({
                theme:"dark-thin",
                scrollbarPosition: "inside",
                autoHideScrollbar: true,
                scrollButtons:{ enable: true }
            });
            $(".navLateral-body").mCustomScrollbar({
                theme:"light-thin",
                scrollbarPosition: "inside",
                autoHideScrollbar: true,
                scrollButtons:{ enable: true }
            });
        });
})(jQuery);

// MOSTRAR Y OCULTAR LAS OPCIONES DE EDITAR O ELIIMINAR
/* function MuestraMOp() {
	// document.getElementById("BMenOp").innerHTML = "Hello World";
	
} */