//yarn add pg 

 const Pool = require ('pg').Pool;

 // 1 abre conexao
 // 2 executa comandos SQl (select,insert...)
 // 3 fechar a conexao 
 // devendo ser executado o mais rapido possivel
 const pool = new Pool({
     user:'ylqbcogmfeartx',
     password:'5534a26e8029c04da4afb54ca5db43a969df809cc9baac11b71ec4d6c8d13886',
     host:'ec2-54-86-170-8.compute-1.amazonaws.com',
     database:'db82vqff9rkve6',
     port:5432,
     ssl: { rejectUnauthorized: false   }
 });

 const sqlCreate = `
    CREATE TABLE IF NOT EXISTS listacompras
    (
        ID serial primary key, 
        nome varchar(50) not null, 
        quantidade int not null default 0, 
        comprado boolean not null default false, 
    )
 `;

 pool.query (sqlCreate, function(error, result){
    if(error)
        throw error
    console.log('Tabela criada com sucesso!')
 });

