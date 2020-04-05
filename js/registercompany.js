/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
$(document).ready(function (){
    
const form = document.getElementById("registerCompanyForm");


const formToJSON = elements =>[].reduce.call(elements, (data, element) => {
    if (element.name !== "submittButton"){
        data[element.name] = element.value;
    }
  return data;
}, {});
 
const handleFormSubmit = event => {
  // Stop the form from submitting since we’re handling that with AJAX.
  event.preventDefault();
  var tmp = document.getElementById("cityInput").value;
  // Call our function to get the form data.
  const data = formToJSON(form.elements);

  postForm(JSON.stringify(data));
};

form.addEventListener('submit', handleFormSubmit);

$(".checkbox").on('change', function() {
  if ($(this).is(':checked')) {
    $(this).attr('value', 'true');
  } else {
    $(this).attr('value', 'false');
  }
})

function postForm(jsonString) {
    jQuery.ajax({
        url: 'http://localhost:8080/hackthecrisis/api/test',
        success: function (result) {
            //alert(result.message);
        },
        async: false,
        //data: jsonString
    });
}

});
