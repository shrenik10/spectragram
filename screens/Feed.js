import { StyleSheet, Text, View,TouchableOpacity, Platform, StatusBar } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Postcard from 'Postcard.js';
import { FlatList } from 'react-native-gesture-handler';
let post = require('./temp_post.json');

export default class Feed extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }
render() {
    
    return(
      <View style={styles.container}>
          <SafeAreaView style={styles.droidsafeArea} />
          <View style={styles.appTitle}>
              <View style={styles.appIcon}>
                  <Image
                       source={require("../assets/logo.png")}
                       style={styles.iconImage}
                   ></Image>
              </View>
              <View style={styles.appTiltleTextContainer}>
                  <Text style={styles.appTiltleText}>Spectram</Text>
              </View>
          </View>
          <View style={styles.cardContainer}>
              <FlatList 
                keyExtractor={this.keyExtractor}
                data={posts}
                renderItem={this.renderItem}
              />
          </View>
      </View>
    );

}

renderItem = ({ item: post }) => {
    return <PostCard post={post} navigation={this.props.navigation} />
};

keyExtractor = (item,index) => index.twostring();

}



const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"black"
    },
    droidSafeArea:{
        marginTop:Platform.OS === "andoroid" ? StatusBar.CurrentHeight:RFValue(35)
    },
    appTitle:{
        flex:0.07,
        flexDirection:"row"
    },
    appIcon:{
        flex:0.2,
        justifyContent:"center",
        alignItems:"center"
    },
    iconImage:{
        width:"100%",
        height:"100%",
        resizeMode:"contain"
    },
    appTiltleTextContainer:{
        flex:0.8,
        justifyContent:"center"
    },
    appTiltleText:{
        color:"white",
        fontsize:RFValue(28),
    },
    cardContainer:{
        flex:0.85
    }
})