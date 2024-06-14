import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';


const App = () => {
  const [directorName, setDirectorName] = useState<any>('');
  const [movieName, setMovieName] = useState<any>('');
  const [Data, setData] = useState<any>([]);

  const handleSubmit = () => {
    if (directorName && movieName) {
      const newData = {
        id: movieName.length.toString(),
        directorName: directorName,
        movieName: movieName,
      };

      setData([...Data, newData]);
      setDirectorName('');
      setMovieName('');
    }
  };

  const deleteData = (id: any) => {
    const updatedData = Data.filter((data: any) => data.id !== id);
    setData(updatedData);
  };

  return (
    <View>
      <Text style={styles.header}>Directors and Movies</Text>

      <View style={styles.textWrap}>
        <TextInput
          placeholder="Director name"
          style={styles.inputOne}
          value={directorName}
          onChangeText={text => setDirectorName(text)}
        />

        <TextInput
          placeholder="Movie name "
          style={[styles.inputOne]}
          value={movieName}
          onChangeText={text => setMovieName(text)}
        />

        <Pressable onPress={() => handleSubmit()} style={styles.addBtn}>
          <Text style={styles.add}>Add</Text>
        </Pressable>
      </View>

      <FlatList
        data={Data}
        renderItem={({item}) => (
          <View style={styles.container}>
            <View style={styles.outputTable}>
              <Text style={{color: 'black'}}>{item.directorName}</Text>
            </View>
            <View style={styles.outputTable}>
              <Text style={{color: 'black'}}>{item.movieName}</Text>
            </View>

            <Pressable
              onPress={() => deleteData(item.id)}
              style={styles.dltBtn}>
              <Text style={{color: 'white'}}>Delete</Text>
            </Pressable>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    gap: 10,
    marginTop: 20,
  },
  addBtn: {
    backgroundColor: 'green',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 2,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dltBtn: {
    backgroundColor: 'red',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 2,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  add: {
    color: 'white',
    fontSize: 14,
  },
  header: {
    fontSize: 30,
    color: 'black',
    fontWeight: 'medium',
    textAlign: 'center',
    marginTop: 20,
  },
  inputOne: {
    width: '35%',
    backgroundColor: '#D3D3D3',
    paddingHorizontal: 15,
    borderColor: 'black',
    borderRadius: 2,
  },

  outputTable: {
    width: '35%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D3D3D3',
    height: 50,
    paddingHorizontal: 15,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 2,
  },
  textWrap: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 30,
    marginHorizontal: 24,
  },
});
