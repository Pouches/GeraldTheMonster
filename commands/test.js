module.exports={
    name:'test',
    description: 'test command',
    execute(message, args){
        message.channel.send('test complete')
    }
}