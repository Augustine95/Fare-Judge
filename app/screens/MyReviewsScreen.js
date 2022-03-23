import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import useAuth from '../auth/useAuth';
import { getEstablishment } from '../services/establishmentsService';
import ListItem from '../components/lists/ListItem';
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';
import ListItemSeparator from '../components/lists/ListItemSeparator';

const getEstablishmentById = id => {
    const establishment = getEstablishment(id);
    if (establishment) return establishment;
}

export default function MyReviewsScreen({ }) {
    const [reviews, setReviews] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        setReviews(user.reviews);
    }, []);

    const handleReviewDelete = review => {
        const newReviews = [...reviews].filter(r => r.id !== review.id);
        setReviews(newReviews);
    }

    return (
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
    )
}