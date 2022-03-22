const users = [
    { image: require('../../assets/user.png'), name: "Augustine Awuori", id: "123" },
];

const getUser = id => {
  // for (let index = 0; index < users.length; index++)
  //     if (users[index].id === id)
  //         return users[index];
  // return null;
    return users[0];
};

export {
    getUser
};