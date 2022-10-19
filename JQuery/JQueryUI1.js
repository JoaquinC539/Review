'use strict'
//Funcion para poder mover las cajas
function dragElements(){
    $(function(){ $(".toDrag, #toDrop").draggable({
            containment:"parent",
            opacity:0.35  }); 
           });}
//Funcion para volver una caja dropeable
function dropElements(){
    $(function(){
        $("#toDrop").droppable({
            drop:function(event,ui){
                $(this).addClass("Dropped");                  
            }
        })
    });
}
//Ejercicio 1
$("#container, .toDrag ").click(function(){
    dragElements();
});
//Ejercicio 2
$(".container, .toDrag, #toDrop ").click(function(){
dragElements();
dropElements();
});

//Ejercicio 3
$(function(){
    $("#resizable").resizable({
        containment:"parent",
        animate:false,
        minHeight:35,
        minWidth:68,
        autoHide:true
    });
});
//Ejercicio 4
$(function(){
    $("#selectable").selectable({
        stop: function(){ 
            var selectDiv=$("#toAppend");       
            $( ".ui-selected", this ).each(function() {
              var index = $( "#selectable li" ).index( this );
              switch (index) {
                case 0:
                    append(index);
                    break;              
                case 1:
                    append(index);
                    break;
                case 2:
                    append(index);;
                     break;
                case 3:
                    append(index);
                    break;
                case 4:
                    append(index);
                        break;
                case 5:
                    append(index);                    
                     break;
              }
            })
        }
    })
});
function append(params) {
    var selectDiv=$("#toAppend"); 
    selectDiv.empty()
    selectDiv.append("Tu selección es la: #"+(params+1));    
}

//Ejercio 5
$(function(){
    $(".column").sortable({
        connectWith:".column",
        handle:".portlet-header",
        cancel:".portlet-toggle",
        placeholder:"portlet-placeholder ui-corner-all",
        
    });

    $(".portlet")
    .addClass("ui-widget ui-widget-content ui-helper-clearfix ui-corner-all")
    .find(".portlet-header")
    .addClass("ui-widget-header ui-corner-all")
    .prepend("<span class='ui-icon ui-icon-minusthick portlet-toggle'></span>")

    $(".portlet-toggle").on("click",function(){
        var icon=$(this);
        icon.toggleClass("ui-icon-minusthick ui-icon-plusthick");
        icon.closest( ".portlet" ).find( ".portlet-content" ).toggle();
    });

});

//Ejercicio 6


  $(function(){
    var atags=[
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
      ];
    $("#tags").autocomplete({
        source: atags
    });
  });

//Ejercicio 7
$(function(){
    $("#datepicker").datepicker({
        monthNames:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],
        dayNames:["Lunes","Martes","Miercoles","Jueves","Viernes","Sabado","Domingo"],
        dayNamesMin:["L","M","M","J","V","S","D"],
        dateFormat: $("#format").val()
    });
    $("#format").on("change",function(){
        $("#datepicker").datepicker("option","dateFormat",$(this).val());
    });
});



