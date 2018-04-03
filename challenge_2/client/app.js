
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
      app.sendData();
    });
  },

  sendData() {
    var data = {
      csv: $('#csvReport').val()
    }

    $.ajax({
      type: 'POST',
      url: '/',
      contentType: 'application/json',
      data: JSON.stringify(data),
      success: function(data) {
        console.log('successfully posted');
        app.appendData(data)
      },
      error: function(err) {
        console.log('error');
      }
    })
  },

  appendData(data) {
    $('#formattedData').append(data);
  }
}

