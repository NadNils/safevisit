/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(function (){
    //alert("Hej");
    const url = 'http://localhost:8080/hackthecrisis/api/test/yeah';
    jQuery.ajax({
        url: url,
        success: function (result) {
            //alert(result.message);
        },
        async: false
    });
});