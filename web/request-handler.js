const path = require('path');

const actions = {
  GET : function(request , response){
    console.log('GET was called.');

    switch(request.url){
      case '/isOccupied':
      response.end('The room is occupied.');
      break;
      default:
      response.end(request.url);
      break;
    }

  },

  POST : function(request , response){
    console.log('POST was called.')
    respose.end('POST was called');
  }
}


exports.handlerRequest = function(request , response){
  if(request.method === 'GET') {
    actions.GET(request,response);
  }
  if(request.method === 'POST'){
    actions.POST(request,response);
  }
}
