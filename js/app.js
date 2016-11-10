//Problem: It look gross in smaller b


var $select = $("<select></select>");
$("#menu").append($select);


$("#menu a").each(function() {
    var $anchor = $(this);

    var $option = $("<option></option>");


    if ($anchor.parent().hasClass("selected")){
      $option.prop("selected", true);
    }

    $option.val($anchor.attr("href"));


    $option.text($anchor.text());

    $select.append($option);
});




var $button = $("<button>Go</button>");
$("#menu").append($button);

$button.click(function(){

 window.location = $select.val();

});









//create a select element (dropdown) and append to the menu

//Append each page link to the dropdown menu as options
//create an option element
//Give selected option the selected property
//set option's value to the href of the link
//set option's text to be the same as the link's text
//append option to dropdown menu

//When an option is selected, change the window to that selected option

//Modify CSS for large screens
//Hide the dropdown menu

//Modify CSS for small screens
//Hide the nav links and show the dropdown menu

//update the dropdown menu to show the selected page
