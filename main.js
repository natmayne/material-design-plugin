$(document).ready(function () {

    var textfieldTheme = 'light'; //change theme

    if (textfieldTheme == 'dark') {
      $('*').css('background-color', '#424242')
    }

    firstNameTextboxOptions = {
      labelText: 'First Name',
      textBoxType: 'singleline',
      hintText: 'Nathanael',
      theme: textfieldTheme
    }
    $("#firstName").materialise(firstNameTextboxOptions);

    lastNameTextBoxOptions = {
      labelText: 'Last Name',
      hintText: 'Mayne',
      textBoxType: 'singleline',
      theme: textfieldTheme
    }
    $("#lastName").materialise(lastNameTextBoxOptions);

    addressTextBoxOptions = {
      labelText: 'Address',
      hintText: '1 Queen Street',
      textBoxType: 'textArea',
      helperText: 'Enter your full address here',
      includeClearButton: true,
      theme: textfieldTheme
    }
    $("#address").materialise(addressTextBoxOptions);

    moreinfoTextBoxOptions = {
      labelText: 'More Info',
      hintText: 'Deliver pizza to front entrance, ring the bell',
      textBoxType: 'multiline',
      helperText: 'Enter any additional information here',
      includeClearButton: true,
      theme: textfieldTheme
    }
    $("#comment").materialise(moreinfoTextBoxOptions);

}); 
