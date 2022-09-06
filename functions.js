const cassandra = require('cassandra-driver');

const client = new cassandra.Client({
  contactPoints: ['localhost'],
  localDataCenter: 'datacenter1',
  keyspace: 'projeto'
})

function gerarId(tamanho) {
  var id = '';
  var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (var i = 0; i < tamanho; i++) {
    id += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
  }
  return id;
}

module.exports = {
    login: function (email, senha) {
      const query = 'SELECT email,senha FROM projeto.usuarios where email = ? AND senha = ? ALLOW FILTERING';
      const param=[String(email), String(senha)];

      client.execute(query,param, function(error, result){
        if (result.rows[0] != undefined){
          console.log('\nLogin efetuado com sucesso')         
        }else if (error){
          console.log('Erro:', error)          
        }else{
          console.log('\nUsuário não encontrado. Tente Novamente')
        }})   
    },
    cadastrar:   function (email,senha) {
      const query = 'INSERT INTO projeto.usuarios (id, email, senha) VALUES (?, ?, ?);';
      const param=[gerarId(16), String(email), String(senha)];

      client.execute(query,param, function(error,result){
        if (error!= undefined){
          console.log('Erro')          
        }else{
          console.log('\nUsuário cadastrado com sucesso')
        }})      
    },

    mostrarTabela: function(){
      const query = 'SELECT * FROM usuarios';
      
      client.execute(query, function(error,result){
        if (error!= undefined){
          console.log('Erro')          
        }else{
          console.table(result.rows)
        }})      
    }
  };