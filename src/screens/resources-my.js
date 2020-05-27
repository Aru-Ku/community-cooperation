import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';
import axios from 'axios';

import {search, userID} from '../lib/utils';

const styles = StyleSheet.create({
  flatListView: {
    backgroundColor: '#FFF',
  },
  itemTouchable: {
    flexDirection: 'column',
    padding: 15,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    borderBottomColor: '#dddddd',
    borderBottomWidth: 0.25,
  },
  itemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemName: {
    fontSize: 24,
    fontFamily: 'FontSans-Medium',
  },
  itemDescription: {
    fontSize: 14,
    fontFamily: 'FontSans-Medium',
    color: 'gray',
  },
  itemQuantity: {
    fontSize: 14,
    fontFamily: 'FontSans-Medium',
    color: 'gray',
  },
  emptyListView: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyListText: {
    fontFamily: 'FontSans-Bold',
    color: '#999999',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#1062FE',
    color: '#FFFFFF',
    fontFamily: 'FontSans-Medium',
    fontSize: 16,
    overflow: 'hidden',
    padding: 12,
    textAlign: 'center',
    marginTop: 15,
  },
});

const MyResources = function({navigation}) {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => {
    navigation.addListener('focus', () => {
      search({userID: userID()})
        .then(setItems)
        .catch(err => {
          console.log(err);
          Alert.alert(
            'ERROR',
            'Please try again. If the problem persists contact an administrator.',
            [{text: 'OK'}],
          );
        });
    });
  }, [navigation]);

  const Item = props => {
    return (
      <TouchableOpacity
        style={styles.itemTouchable}
        onPress={() => {
          navigation.navigate('Edit Donation', {item: props});
        }}>
        <View style={styles.itemView}>
          <Text style={styles.itemName}>{props.name}</Text>
          <Text style={styles.itemQuantity}> ( {props.quantity} ) </Text>
        </View>
        <Text style={styles.itemDescription}>{props.description}</Text>
      </TouchableOpacity>
    );
  };

  if (items.length > 0) {
    return (
      <FlatList
        style={styles.flatListView}
        data={items}
        renderItem={({item}) => <Item {...item} />}
        keyExtractor={item => item.id || item._id}
      />
    );
  } else {
    return (
      <>
        <TouchableOpacity
          onPress={() => navigation.navigate('Donate Resources')}>
          <Text style={styles.button}>Add</Text>
        </TouchableOpacity>
        <View style={styles.emptyListView}>
          <Text style={styles.emptyListText}>
            You currently have no donations listed
          </Text>
        </View>
      </>
    );
  }
};

export default MyResources;
