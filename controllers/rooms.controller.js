const rooms=[]

const newRoom= (room)=>{
    rooms.push(room)
}

const roomsIsEmpty=()=>{
    return rooms.length==0
}

const thereIsAroom=(id)=>{
    return rooms.includes(id)
}

const getUsers = (id)=>{
   let index= rooms.findIndex( room=> room.id === id)
   return rooms[index].users
}

module.exports={newRoom,getUsers,roomsIsEmpty,thereIsAroom}