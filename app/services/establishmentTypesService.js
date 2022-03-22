const establishmentTypes = [
    {
        label: "Bar",
        value: 1,
        icon: "beer-outline",
        backgroundColor: "dodgerblue",
    },
    { label: "Cafe", value: 2, icon: "tea-outline", backgroundColor: "gold" },
    {
        label: "Restaurant",
        value: 3,
        icon: "silverware-variant",
        backgroundColor: "pink",
    },
];

const getEstablishmentTypes = () => {
    return establishmentTypes.filter(e => e);
};

const getEstablishmentType = value => {
    for (let i = 0; i < establishmentTypes.length; i++)
        if (establishmentTypes[i].value === value) return establishmentTypes[i];
    return null;
};

export {
    getEstablishmentTypes,
    getEstablishmentType
};