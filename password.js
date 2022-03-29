$("#ok").on('click', function() {

    let name = $("#field_1").val();
    let passwords_1 = [];
    let passwords_2 = [];
    let passwords_3 = [];
    let words_1 = ["_1", "_123", "+", "_2022", "*"];
    let words_2 = ["_schön", "_klug", "_schatz", "_mimi", "_super"];
    let words_3 = ["_corona", "_corona2021", "_held2022", "_DAA", "_FISI"];
    let passwords_box_1 = [];
    let passwords_box_2 = [];
    let passwords_box_3 = [];

    passwords_box_1 = $(".column_1 .passwort");
    passwords_box_2 = $(".column_2 .passwort");
    passwords_box_3 = $(".column_3 .passwort");

    for (var i = 0; i < 5; i++) {
      passwords_1[i] = name + words_1[i];
      $(passwords_box_1[i]).text(passwords_1[i]);
      $(passwords_box_1[i]).addClass("visible");
    }
    
    for (var i = 0; i < 5; i++) {
        passwords_2[i] = name + words_2[i];
        $(passwords_box_2[i]).text(passwords_2[i]);
        $(passwords_box_2[i]).addClass("visible");
    }

    for (var i = 0; i < 5; i++) {
        passwords_3[i] = name + words_3[i];
        $(passwords_box_3[i]).text(passwords_3[i]);
        $(passwords_box_3[i]).addClass("visible");
    }

    if (name == "") {
      $(".passwort").hide();
    }

  })