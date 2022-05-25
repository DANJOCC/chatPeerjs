const rooms=[]

const newRoom= (room)=>{
    rooms.push(room)
}

const getUsers = (id)=>{
   let index= rooms.findIndex( room=> room.id === id)
   return rooms[index].users
}

module.exports={newRoom,getUsers}