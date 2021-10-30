import { v4 as uuidv4 } from 'uuid';
const getId = () => {
    let myuuid = uuidv4();
    return myuuid;

};
const ChatsArray = [
    {
        name: "Alice",
        id: getId(),
    },
    {
        name: "Nick",
        id: getId(),

    },
];

export default getId;