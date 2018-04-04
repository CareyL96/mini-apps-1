
var app = {
  id: 0,

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
    console.log('CLIENT: converting form data to object');
    
    var data = {
      id: app.id,
      csv: $('#csvReport').val()
    }

    console.log('CLIENT: converting object to JSON.stringified object - ' + typeof JSON.stringify(data));
    fetch('/', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(function(data) {
      console.log('hello');
      console.log(data);
      app.appendData(data);
    }).catch(function(err) {
      throw err;
    })
    // $.ajax({
    //   type: 'POST',
    //   url: '/',
    //   contentType: 'application/json',
    //   data: JSON.stringify(data),
    //   success: function(data) {
    //     console.log('CLIENT: receiving data as - ' + typeof data);
    //     app.appendData(data);
    //     console.log('successfully posted');
    //   },
    //   error: function(err) {
    //     console.log('error');
    //   }
    // })
  },

  appendData(data) {
    $('#data').empty();
    $('#data').append(data);
    app.id += 1;
  }
}

