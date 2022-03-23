let state = {
    dialogsPage: {
        messages: [
            {chatId: 1, message: ["Hello"],},
            {chatId: 2, message: [" How's life, pal?"]}],
        contacts: [
            {id: 1, name: "🤠 Pevel Durov",},
            {id: 2, name: "🥶 Elon Musk"}]
    },
    profilePage: {
        posts: [
            {id: 1, text:"Hello props!", likes: 93},
            {id: 2, text:"Hello props! SECOND COMPONENT!", likes: 18},
        ]
    }
}

export default state;