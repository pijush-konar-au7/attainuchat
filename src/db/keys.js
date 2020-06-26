const mongoose = require('mongoose')

//Db connection

mongoose.connect(`mongodb+srv://pijush:`+ encodeURIComponent('firewall') + `@cluster0-vrwws.mongodb.net/attainu-chat?retryWrites=true`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));



//connect local

// mongoose.connect('mongodb://localhost:27017/chat2', {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
// })
// .then(() => console.log('MongoDB Connected'))
// .catch(err => console.log(err));