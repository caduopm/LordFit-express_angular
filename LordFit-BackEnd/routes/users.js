var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.json(
    {
      data:[
        {id:1,email:"george.bluth@reqres.in",first_name:"George",last_name:"Bluth",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"},
        {id:2,email:"janet.weaver@reqres.in",first_name:"Janet",last_name:"Weaver",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"},
        {id:3,email:"emma.wong@reqres.in",first_name:"Emma",last_name:"Wong",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg"},
        {id:4,email:"eve.holt@reqres.in",first_name:"Eve",last_name:"Holt",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"},
        {id:5,email:"charles.morris@reqres.in",first_name:"Charles",last_name:"Morris",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"},
        {id:6,email:"tracey.ramos@reqres.in",first_name:"Tracey",last_name:"Ramos",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"}
      ]});
});

router.get('/worckoutList', function(req, res, next) {
  res.json(
    {
      data:[
        {id: 1, nome: "imagem1", description: "descricao do teste", img: "https://picsum.photos/id/1062/350/300"},
        {id: 2, nome: "imagem2", description: "descricao do teste sdcasd", img: "https://picsum.photos/id/1024/350/300"},
        {id: 3, nome: "imagem3", description: "descricao do testec wecqwec", img: "https://picsum.photos/id/1051/350/300"},
        {id: 4, nome: "imagem4", description: "descricaasdknjckjstec wecqwec", img: "https://picsum.photos/id/1024/350/300"},
        {id: 5, nome: "imagem5", description: "descricaasdknjckjstec wecqwec", img: "https://picsum.photos/seed/picsum/350/300"},
        {id: 6, nome: "imagem6", description: "descricaasdknjckjstec wecqwec", img: "https://picsum.photos/id/1051/350/300"}
      ]});
});

router.get('/worckout', function(req, res, next) {
  res.json(
    {
      data:[
        {
          id:1,
          first_name:"George",
          last_name:"Bluth",
          avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg",
          worckout: [
            { tipo: "A", exemplos: [ 
                {id: 1, nome: "imagem1", description: "descricao do teste", img: "https://picsum.photos/id/1062/350/300"},
                {id: 2, nome: "imagem2", description: "descricao do teste sdcasd", img: "https://picsum.photos/id/1024/350/300"},
                {id: 3, nome: "imagem3", description: "descricao do testec wecqwec", img: "https://picsum.photos/id/1051/350/300"},
                {id: 4, nome: "imagem4", description: "descricaasdknjckjstec wecqwec", img: "https://picsum.photos/id/1024/350/300"}
              ]
            },
            { tipo: "B", exemplos: [ 
                {id: 1, nome: "imagem1", description: "descalkncc teste", img: "https://picsum.photos/id/1051/350/300"},
                {id: 2, nome: "imagem2", description: "descricao ajdsclbcdaldsdcasd", img: "https://picsum.photos/id/1024/350/300"},
                {id: 3, nome: "imagem3", description: "descricao do tkjancljadncc wecqwec", img: "https://picsum.photos/id/1062/350/300"}
              ]
            },
            { tipo: "C", exemplos: [ 
                {id: 1, nome: "imagem1", description: "descricaslkjdncljads teste", img: "https://picsum.photos/id/1062/350/300"},
                {id: 2, nome: "imagem2", description: "descricao do teste sdcasd", img: "https://picsum.photos/id/1051/350/300"},
                {id: 3, nome: "imagem3", description: "descricao dolksajdncjnwecqwec", img: "https://picsum.photos/id/1051/350/300"},
                {id: 5, nome: "imagem4", description: "descricao a;oisjc;danec wecqwec", img: "https://picsum.photos/id/1024/350/300"}
              ]
            }
          ]
        },
        {
          id:2,
          first_name:"Janet",
          last_name:"Weaver",
          avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg",
          worckout: [
            { tipo: "A", exemplos: [ 
                {id: 1, nome: "imagem1", description: "descricao do teste", img: "https://picsum.photos/id/1062/350/300"},
                {id: 2, nome: "imagem2", description: "descricao do teste sdcasd", img: "https://picsum.photos/id/1024/350/300"},
                {id: 3, nome: "imagem3", description: "descricao do testec wecqwec", img: "https://picsum.photos/id/1051/350/300"},
                {id: 4, nome: "imagem4", description: "descricaasdknjckjstec wecqwec", img: "https://picsum.photos/id/1024/350/300"}
              ]
            },
            { tipo: "B", exemplos: [ 
                {id: 1, nome: "imagem1", description: "descalkncc teste", img: "https://picsum.photos/id/1051/350/300"},
                {id: 2, nome: "imagem2", description: "descricao ajdsclbcdaldsdcasd", img: "https://picsum.photos/id/1024/350/300"},
                {id: 3, nome: "imagem3", description: "descricao do tkjancljadncc wecqwec", img: "https://picsum.photos/id/1062/350/300"}
              ]
            },
            { tipo: "C", exemplos: [ 
                {id: 1, nome: "imagem1", description: "descricaslkjdncljads teste", img: "https://picsum.photos/id/1062/350/300"},
                {id: 2, nome: "imagem2", description: "descricao do teste sdcasd", img: "https://picsum.photos/id/1051/350/300"},
                {id: 3, nome: "imagem3", description: "descricao dolksajdncjnwecqwec", img: "https://picsum.photos/id/1051/350/300"},
                {id: 5, nome: "imagem4", description: "descricao a;oisjc;danec wecqwec", img: "https://picsum.photos/id/1024/350/300"}
              ]
            }
          ]
        },
        {
          id:3,
          first_name:"Emma",
          last_name:"Wong",
          avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg",
          worckout: [
            { tipo: "A", exemplos: [ 
                {id: 1, nome: "imagem1", description: "descricao do teste", img: "https://picsum.photos/id/1062/350/300"},
                {id: 2, nome: "imagem2", description: "descricao do teste sdcasd", img: "https://picsum.photos/id/1024/350/300"},
                {id: 3, nome: "imagem3", description: "descricao do testec wecqwec", img: "https://picsum.photos/id/1051/350/300"},
                {id: 4, nome: "imagem4", description: "descricaasdknjckjstec wecqwec", img: "https://picsum.photos/id/1024/350/300"}
              ]
            },
            { tipo: "B", exemplos: [ 
                {id: 1, nome: "imagem1", description: "descalkncc teste", img: "https://picsum.photos/id/1051/350/300"},
                {id: 2, nome: "imagem2", description: "descricao ajdsclbcdaldsdcasd", img: "https://picsum.photos/id/1024/350/300"},
                {id: 3, nome: "imagem3", description: "descricao do tkjancljadncc wecqwec", img: "https://picsum.photos/id/1062/350/300"}
              ]
            },
            { tipo: "C", exemplos: [ 
                {id: 1, nome: "imagem1", description: "descricaslkjdncljads teste", img: "https://picsum.photos/id/1062/350/300"},
                {id: 2, nome: "imagem2", description: "descricao do teste sdcasd", img: "https://picsum.photos/id/1051/350/300"},
                {id: 3, nome: "imagem3", description: "descricao dolksajdncjnwecqwec", img: "https://picsum.photos/id/1051/350/300"},
                {id: 5, nome: "imagem4", description: "descricao a;oisjc;danec wecqwec", img: "https://picsum.photos/id/1024/350/300"}
              ]
            }
          ]
        },
        {
          id:4,
          first_name:"Eve",
          last_name:"Holt",
          avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg",
          worckout: [
            { tipo: "A", exemplos: [ 
                {id: 1, nome: "imagem1", description: "descricao do teste", img: "https://picsum.photos/id/1062/350/300"},
                {id: 2, nome: "imagem2", description: "descricao do teste sdcasd", img: "https://picsum.photos/id/1024/350/300"},
                {id: 3, nome: "imagem3", description: "descricao do testec wecqwec", img: "https://picsum.photos/id/1051/350/300"},
                {id: 4, nome: "imagem4", description: "descricaasdknjckjstec wecqwec", img: "https://picsum.photos/id/1024/350/300"}
              ]
            },
            { tipo: "B", exemplos: [ 
                {id: 1, nome: "imagem1", description: "descalkncc teste", img: "https://picsum.photos/id/1051/350/300"},
                {id: 2, nome: "imagem2", description: "descricao ajdsclbcdaldsdcasd", img: "https://picsum.photos/id/1024/350/300"},
                {id: 3, nome: "imagem3", description: "descricao do tkjancljadncc wecqwec", img: "https://picsum.photos/id/1062/350/300"}
              ]
            },
            { tipo: "C", exemplos: [ 
                {id: 1, nome: "imagem1", description: "descricaslkjdncljads teste", img: "https://picsum.photos/id/1062/350/300"},
                {id: 2, nome: "imagem2", description: "descricao do teste sdcasd", img: "https://picsum.photos/id/1051/350/300"},
                {id: 3, nome: "imagem3", description: "descricao dolksajdncjnwecqwec", img: "https://picsum.photos/id/1051/350/300"},
                {id: 5, nome: "imagem4", description: "descricao a;oisjc;danec wecqwec", img: "https://picsum.photos/id/1024/350/300"}
              ]
            }
          ]
        },
        {
          id:5,
          first_name:"Charles",
          last_name:"Morris",
          avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg",
          worckout: [
            { tipo: "A", exemplos: [ 
                {id: 1, nome: "imagem1", description: "descricao do teste", img: "https://picsum.photos/id/1062/350/300"},
                {id: 2, nome: "imagem2", description: "descricao do teste sdcasd", img: "https://picsum.photos/id/1024/350/300"},
                {id: 3, nome: "imagem3", description: "descricao do testec wecqwec", img: "https://picsum.photos/id/1051/350/300"},
                {id: 4, nome: "imagem4", description: "descricaasdknjckjstec wecqwec", img: "https://picsum.photos/id/1024/350/300"}
              ]
            },
            { tipo: "B", exemplos: [ 
                {id: 1, nome: "imagem1", description: "descalkncc teste", img: "https://picsum.photos/id/1051/350/300"},
                {id: 2, nome: "imagem2", description: "descricao ajdsclbcdaldsdcasd", img: "https://picsum.photos/id/1024/350/300"},
                {id: 3, nome: "imagem3", description: "descricao do tkjancljadncc wecqwec", img: "https://picsum.photos/id/1062/350/300"}
              ]
            },
            { tipo: "C", exemplos: [ 
                {id: 1, nome: "imagem1", description: "descricaslkjdncljads teste", img: "https://picsum.photos/id/1062/350/300"},
                {id: 2, nome: "imagem2", description: "descricao do teste sdcasd", img: "https://picsum.photos/id/1051/350/300"},
                {id: 3, nome: "imagem3", description: "descricao dolksajdncjnwecqwec", img: "https://picsum.photos/id/1051/350/300"},
                {id: 5, nome: "imagem4", description: "descricao a;oisjc;danec wecqwec", img: "https://picsum.photos/id/1024/350/300"}
              ]
            }
          ]
        },
        {
          id:6,
          first_name:"Tracey",
          last_name:"Ramos",
          avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg",
          worckout: [
            { tipo: "A", exemplos: [ 
                {id: 1, nome: "imagem1", description: "descricao do teste", img: "https://picsum.photos/id/1062/350/300"},
                {id: 2, nome: "imagem2", description: "descricao do teste sdcasd", img: "https://picsum.photos/id/1024/350/300"},
                {id: 3, nome: "imagem3", description: "descricao do testec wecqwec", img: "https://picsum.photos/id/1051/350/300"},
                {id: 4, nome: "imagem4", description: "descricaasdknjckjstec wecqwec", img: "https://picsum.photos/id/1024/350/300"}
              ]
            },
            { tipo: "B", exemplos: [ 
                {id: 1, nome: "imagem1", description: "descalkncc teste", img: "https://picsum.photos/id/1051/350/300"},
                {id: 2, nome: "imagem2", description: "descricao ajdsclbcdaldsdcasd", img: "https://picsum.photos/id/1024/350/300"},
                {id: 3, nome: "imagem3", description: "descricao do tkjancljadncc wecqwec", img: "https://picsum.photos/id/1062/350/300"}
              ]
            },
            { tipo: "C", exemplos: [ 
                {id: 1, nome: "imagem1", description: "descricaslkjdncljads teste", img: "https://picsum.photos/id/1062/350/300"},
                {id: 2, nome: "imagem2", description: "descricao do teste sdcasd", img: "https://picsum.photos/id/1051/350/300"},
                {id: 3, nome: "imagem3", description: "descricao dolksajdncjnwecqwec", img: "https://picsum.photos/id/1051/350/300"},
                {id: 5, nome: "imagem4", description: "descricao a;oisjc;danec wecqwec", img: "https://picsum.photos/id/1024/350/300"}
              ]
            }
          ]
        }
      ]
    }
  );
});

router.get('/info', function(req, res, next) {
  res.json({user: "carlos", idade: 25, peso: 81 });
});

router.post('/login', function(req, res, next) {

  // console.log(req.body.usuario);
  // console.log('body is ',req.body);
  res.json({user: "carlos", idade: 25, peso: 81 });
  // res.send({id:1,email:"george.bluth@reqres.in",first_name:"George",last_name:"Bluth",avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"});
});

module.exports = router;
