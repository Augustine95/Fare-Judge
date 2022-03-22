import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import { getEstablishment } from '../services/establishmentsService';
import ListItem from '../components/lists/ListItem';
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import Screen from '../components/Screen';

const user = {
    id: "123",
    name: "Augustine Awuori",
    image: require('../../assets/user.png'),
    reviews: [
        {
            establishmentId: "1",
            foodType: "Fish",
            review: "This is so cool"
        }
    ]
};

const getEstablishmentById = id => getEstablishment(id);

export default function MyReviewsScreen({ }) {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        setReviews(user.reviews);
    }, []);

    const handleReviewDelete = review =>
        setReviews([...reviews].filter(
            r => r.establishmentId !== review.establishmentId && r.description !== review.description)
        );

    return (
        <Screen>
            <FlatList
                data={reviews}
                keyExtractor={item => item.reviewerId + item.foodType}
                ItemSeparatorComponent={ListItemSeparator}
                renderItem={({ item }) => (
                    <ListItem
                        key={item => item.foodType + item.establishmentId}
                        image={getEstablishmentById(item.establishmentId).image}
                        subTitle={item.review}
                        title={getEstablishmentById(item.establishmentId).name}
                        renderRightActions={() => (
                            <ListItemDeleteAction onPress={() => handleReviewDelete(item)} />
                        )}
                    />
                )}
            />
        </Screen>
    )
}