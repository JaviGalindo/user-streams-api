const USERS =  [
    {"id": "3e4e6e36-cbd2-4da2-bc38-d530bc528c9d", "numberOfStreams": 1},
    {"id": "bf49d24e-7737-4b27-a353-90a450b24028", "numberOfStreams": 2},
    {"id": "2564be69-2df9-495f-b077-1e93789c59bc", "numberOfStreams": 3}
];


function getNumOfConcurrentStreamByUserId(userId) {
    const user = USERS.find(user => user.id === userId);
    return user?.numberOfStreams;
}

module.exports = {getNumOfConcurrentStreamByUserId};