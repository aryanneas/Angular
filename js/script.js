/*sintaxe básica
    $(seletor).ação();
*/

/*quando clica no botao, o texto some
$(function(){
    $('button').click(function(){
        $('h1').hide();
    });
});
*/

/*mudando o css
*1° parametro seleciona o que quer mudar
*2° parametro seleciona com que propriedade quer mudar
*nesse caso, so vai mudar a cor do h1 que tem o id unico
***$(function(){
    $('button').click(function(){
        $('#unico').css("color", "red");
    });
});
*/

/*
$(function(){
    $('#azul').click(function(){
        $('p').css("background-color", "blue");
       // $('p').fadeOut();
    });

    $('#vermelho').click(function(){
        $('p').css("background-color", "red");
        //$('p').fadeIn();
        $("#mensagem").text("cor alterada para vermelho");
        $("#mensagem").css({color: 'red', border: '1px solid red'});
        $("#mensagem").delay(3000);
        $("#mensagem").fadeOut();
        $("#mensagem").addClass('green');
        $("button").removeClass('red');
    });
});
*/

/*carousel com jquery
$(function(){
    $('#l1').click(function(){
        $('#i1').show();
        $('#i2').hide();
        $('#i3').hide();
        $('#i4').hide();
    });

    $('#l2').click(function(){
        $('#i1').hide();
        $('#i2').show();
        $('#i3').hide();
        $('#i4').hide();
    });

    $('#l3').click(function(){
        $('#i1').hide();
        $('#i2').hide();
        $('#i3').show();
        $('#i4').hide();
    });

    $('#l4').click(function(){
        $('#i1').hide();
        $('#i2').hide();
        $('#i3').hide();
        $('#i4').show();
    });
});
*/
