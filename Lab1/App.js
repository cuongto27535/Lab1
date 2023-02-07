import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import ProductList from './src/screen/ProductList';

export default function App() {
    const [status,setStatus] = useState(false);
    const list =  [
        {id:1,name:'Cương',note:'sv',image:'../../../assets/anh3.png'},
        {id:2,name:'Việt',note:'sv',image:'../../../assets/anh3.png'},
        {id:3,name:'Trung',note:'sv',image:'../../../assets/anh3.png'}
            ];
  return (
    <View style={styles.container}>
        <View style={styles.head}>
            <Text>Tên :Tô Lê Cương</Text>
            <Text>MSV: PH27535</Text>
        </View>
      <Button title='Thêm ' style={styles.btnAdd} onPress={() =>setStatus(true)}/>
      { status ? 
              <View style={styles.layoutAdd}>
                    <TextInput style={styles.input}placeholder = 'Tên'/>
                    <TextInput style={styles.input}placeholder = 'Mô tả'/>
                    <TextInput style={styles.input}
                    placeholder = 'Link ảnh'/>
                    <View style={styles.button}>
                        <Button title='Hủy' style={styles.buttonHuy} onPress={() =>setStatus(false)}/>
                        <Button title='Lưu'/>
                    </View>          
                </View> 
                : null
            }
    <View style={styles.list}>
      <ProductList data={list}/>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
  },
  
  head:{
    marginTop:20,
    alignItems:'flex-start',
  },
  input: {
    height: 40,
    marginTop:10,
    borderWidth: 2,
    padding: 3,
    borderRadius:3,
  },
  btnAdd:{
    maxWidth:40,
    alignItems:'flex-end',
  },
 
  button:{
    flexDirection: 'row',
    marginTop:15,
    marginBottom:5,
  },

 

});
