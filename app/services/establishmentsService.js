let establishments = [
    {
        id: "1",
        name: "Cool Bar",
        location: "Los Angeles",
        image: require("../../assets/bar.jpg"),
        foods: [
            {
                name: "Nachos",
                icon: {
                    name: "glass-cocktail",
                    backgroundColor: "#fcba03",
                },
            },
            {
                name: "Wings",
                icon: {
                    name: "circle-outline",
                    backgroundColor: "#fce703",
                },
            },
            {
                name: "Quesadillas",
                icon: {
                    name: "glass-wine",
                    backgroundColor: "#bafc03",
                },
            },
            {
                name: "Artichoke dip",
                icon: {
                    name: "coffee-outline",
                    backgroundColor: "#be03fc",
                },
            },
        ],
        typeValue: 1,
        reviews: []
    },
    {
        id: "2",
        name: "Fast Food Restaurant",
        location: "Nairobi",
        image: require("../../assets/restaurant.jpg"),
        foods: [
            {
                name: "Smoked Pork",
                icon: {
                    name: "glass-cocktail",
                    backgroundColor: "#fcba03",
                },
            },
            {
                name: "Sushi",
                icon: {
                    name: "glass-cocktail",
                    backgroundColor: "#fce703",
                },
            },
        ],
        typeValue: 2,
        reviews: []
    },
    {
        id: "3",
        name: "McDonald",
        image: require("../../assets/cafe.jpg"),
        location: "Beverly Hills",
        foods: [
            {
                name: "Coffee",
                icon: {
                    name: "glass-cocktail",
                    backgroundColor: "#fcba03",
                },
            },
            {
                name: "Tea",
                icon: {
                    name: "glass-cocktail",
                    backgroundColor: "#fce703",
                },
            },
            {
                name: "Donuts",
                icon: {
                    name: "glass-cocktail",
                    backgroundColor: "#fcba03",
                },
            },
        ],
        typeValue: 3,
        reviews: []
    },
];

const getEstablishments = () => {
    return establishments.filter(e => e);
};

const getEstablishment = id => {
    for (let i = 0; i < establishments.length; i++) {
        if (establishments[i].id === id) return establishments[i];
    }
    return null;
};

const deleteEstablishment = id => {
    establishments = establishments.filter(e => e.id !== id);
    return establishments;
};

const reviewEstablishment = (establishmentId, review) => {
    establishments.map(e => {
        if (e.id === establishmentId)
            return e.reviews = [...e.reviews, review];
    });
};

export {
    getEstablishments,
    getEstablishment,
    deleteEstablishment
};