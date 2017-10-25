$.fn.materialise = function (options) {

    //set default options or set parsed options
    var settings = $.extend({
      labelText: 'First Name',
      textBoxType: 'singleline',
      hintText: 'John',
      helperText: '',
      includeClearButton: false,
      theme: 'light'
    }, options);

    this.addClass("mtr-control");

    //set textBoxType
    if (settings.textBoxType == 'singleline') {
      this.append('<input class="mtr-input" type="text" required>');
    }

    if (settings.textBoxType == 'multiline') {
      this.append('<textarea class="mtr-textarea" rows="2" cols="50" required>');
    }

    if (settings.textBoxType == 'textArea') {
      this.append('<textarea class="mtr-textarea" rows="4" cols="50" required>');
    }

    this.append('<span class="mtr-highlight"></span> <span class="mtr-bar"></span>');

    var $thisTextbox = null;
    if (settings.textBoxType == 'singleline') {
      $thisTextbox = this.children('input')
    }
    else {
      $thisTextbox = this.children('textarea')
    }
  
    //set hintText
    $thisTextbox.focus(function () {
      $thisTextbox.attr("placeholder", settings.hintText);
    });
    $thisTextbox.focusout(function () {
      $thisTextbox.attr("placeholder", "");
    });

    //set labelText
    this.append("<label class='mtr-label'>" + settings.labelText + "</label>");
    
    //set helperText
    this.append('<div class="mtr-hint" style="font-style:italic">' + settings.helperText + '</div>');
    
    //add clear button 
    if (settings.includeClearButton == true) {
      this.append('<a class="mtr-clearControl">&#xd7;</a>')
    }
    $(this).find(".mtr-clearControl").click(function () {
      $thisTextbox.val('');
    });
    //set theme 
     if (settings.theme == "dark") {
      $(this).children().css({
        "background-color": "#424242"
      });
      $(this).css({
        "background-color": "#424242"
      });
    }
    if (settings.theme == "light") {
      $(this).children().css({
        "background-color": "white"
      });
      $(this).css({
        "background-color": "white"
      });
    }
  }; 
