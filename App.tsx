import React, {useState,useEffect} from "react";
import { Image,StyleSheet,Text,Touchable,TouchableOpacity,View } from "react-native";

function App(): React.JSX.Element{
  let ss: number =0;
  let mm: number= 0;
  let hh: number = 0;
  const [botao, setBotao]= useState('Iniciar');
  const [ultimo, setUltimo]= useState('00:00:00');
  const [formattedTime, setFormattedTime]=useState('00:00:00');
  const [intervalId, setIntervalId]=useState<NodeJS.Timeout |null> (null)
    return(
    <View style={styles.container}>
      <Image source={require('./src/assets/images/crono.png')}/>

      <Text style={styles.timer}>{formattedTime}</Text>

      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.bnt}>
          <Text style={styles.btnTexto}>{botao}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bnt}>
          <Text style={styles.btnTexto}>Limpar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.areaTempo}>
        <Text style={styles.textoCorrido}>ultimo tempo: 00:00:00</Text>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({

  container:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor :'#00aeef'
  },
  areaTempo:{
    marginTop: 40
  },
  textoCorrido:{
    fontSize:20,
    color: '#fff',
    fontStyle:"italic"
  },
  timer:{
marginTop:-160,
fontSize:45,
fontWeight: 'bold',
color:'#fff'
  },
  bnt:{
    flex:1,
    justifyContent:'center',
    alignItems:"center",
    backgroundColor:"#fff",
    height:40,
    width:17,
    borderRadius:20
  },
  btnTexto:{
    fontSize:20,
    fontWeight:'bold',
    color:'#00aeef'
  },
  btnArea:{
    flexDirection:'row',
    marginTop:130,
    height:40
  }
});

export default App;