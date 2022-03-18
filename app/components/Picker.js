import React, { useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    Modal,
    TouchableWithoutFeedback,
    FlatList,
} from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

import colors from "../config/colors";
import Screen from "./Screen";
import PickerItem from "./PickerItem";

export default function Picker({
    icon,
    items,
    numberOfColumns = 1,
    onSelectItem,
    PickerItemComponent = PickerItem,
    placeholder,
    selectedItem,
}) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                <View style={styles.container}>
                    {icon && (
                        <MaterialCommunityIcons
                            color={colors.medium}
                            name={icon}
                            size={20}
                            style={styles.icon}
                        />
                    )}

                    {selectedItem ? (
                        <Text style={styles.text}>{selectedItem.label}</Text>
                    ) : (
                        <Text style={styles.placeholder}>{placeholder}</Text>
                    )}

                    <MaterialCommunityIcons
                        color={colors.medium}
                        name="chevron-down"
                        size={25}
                    />
                </View>
            </TouchableWithoutFeedback>
            <Modal
                animationType="slide"
                presentationStyle="fullScreen"
                visible={modalVisible}
            >
                <Screen>
                    <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                        <MaterialCommunityIcons
                            color={colors.primary}
                            name="close-thick"
                            size={40}
                            style={styles.closeIcon}
                        />
                    </TouchableWithoutFeedback>
                    <FlatList
                        data={items}
                        keyExtractor={(item) => item.value.toString()}
                        numColumns={numberOfColumns}
                        renderItem={({ item }) => (
                            <PickerItemComponent
                                item={item}
                                onPress={() => {
                                    setModalVisible(false);
                                    onSelectItem(item);
                                }}
                            />
                        )}
                    />
                </Screen>
            </Modal>
        </>
    );
}

const styles = StyleSheet.create({
    closeIcon: {
        alignSelf: "center",
    },
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        padding: 15,
    },
    icon: {
        marginRight: 10,
    },
    placeholder: {
        color: colors.medium,
        fontSize: 18,
        flex: 1,
    },
    text: {
        color: colors.medium,
        fontSize: 18,
        flex: 1,
    },
});
