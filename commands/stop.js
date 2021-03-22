module.exports={
    name:'stop',
    description: 'stops bot',
    execute(message,args){
        process.exit();
    }
}