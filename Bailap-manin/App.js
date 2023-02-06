import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import ProductList from './src/screen/ProductList';

export default function App() {
    const [status,setStatus] = useState(false);
    const list =  [
        {id:1,name:'Tên',note:'Mô tả',image:'../../../assets/icon.png'},
        {id:2,name:'Tên',note:'Mô tả',image:'../../../assets/icon.png'},
        {id:3,name:'Tên',note:'Mô tả',image:'../../../assets/icon.png'}
            ];
  return (
    <View style={styles.container}>
        <View style={styles.head}>
            <Text>Họ tên: Phạm Trường Giang</Text>
            <Text>MSV: PH28126</Text>
        </View>
      <Button title='Thêm mới' style={styles.btnAdd} onPress={() =>setStatus(true)}/>
      {
                status 
                ? 
                <View style={styles.layoutAdd}>
                    <TextInput style={styles.input}
                    placeholder = 'Tên'
                    />
                    <TextInput style={styles.input}
                    placeholder = 'Mô tả'
                    />
                    <TextInput style={styles.input}
                    placeholder = 'Link ảnh'
                    />

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
    height: 30,
    marginTop:10,
    borderWidth: 1,
    padding: 3,
    borderRadius:3,
  },
  btnAdd:{
    maxWidth:50,
    alignItems:'flex-end',
  },
  layoutAdd:{
    flex:0,
    margin:10,
    padding:5,
    borderWidth:1,
    borderColor:'black',
    padding:10,
    borderRadius:5,

  },
  button:{
    flexDirection: 'row',
    marginTop:15,
    marginBottom:5,
  },

  list: {
    flex:0,
    margin:30,
    borderWidth:1,
    borderColor:'black',
    borderRadius:5,
    padding:10,    
  },
  
});
