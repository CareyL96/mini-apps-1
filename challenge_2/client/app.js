
// post request contains csv data
// ??? handles post request
// post request info gets reformatted
// reformatted data gets serialized
// serialized data gets sent back to client
// client displays information on page

var app = {
  init() {
    app.handleSubmit();
  },

  handleSubmit() {
    // sends a post request to server on submit
    $('#send').on('submit', (e) => {
      e.preventDefault();

      console.log($('#csvReport').val());
      
      var data = {
        csv: $('#csvReport').val()
      }
      
      $.ajax({
        type: 'POST',
        url: '/',
        contentType: 'application/json',
        data: JSON.stringify(data),
        success: function(response) {
          console.log('successfully posted');
          console.log(response);
        },
        error: function(response) {
          console.log('error');
          console.log(response)
        }
      })
    });
  },
}

