const firebase = require('./firebase_conect');

module.exports = {
  saveData:(req, callback)=> {
    let data = req.data;
    firebase.database().ref("medias/"+data).set({
      data:req.data,
      media:req.media
    });
    callback(null,{"statuscode":200,"message":"Data inserted successfully"});
  }
}