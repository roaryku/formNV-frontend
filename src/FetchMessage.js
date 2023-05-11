import axios from 'axios';

const getAllMessages = (setMessage) => {
    axios.get("https://form-nv.onrender.com")
    .then(({data}) => {console.log(data)
        setMessage(data)
    })
}

const newMessage = (title, setTitle, setMessage) => {
    axios.post(`https://form-nv.onrender.com/saveMessage`, { title })
    .then((data) => {
        console.log(data)
        setTitle("")
        getAllMessages(setMessage)
    })
}

export{ getAllMessages, newMessage }