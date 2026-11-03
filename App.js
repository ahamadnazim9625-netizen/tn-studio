import React, { useState } from 'react';
import {
  View, Text, ScrollView, TextInput,
  TouchableOpacity, StyleSheet, StatusBar
} from 'react-native';

const videos = [
  {title:'Adventure Movie',type:'Movie',icon:'🎬'},
  {title:'Mystery Series',type:'Web Series',icon:'📺'},
  {title:'Music Collection',type:'Music',icon:'🎵'},
  {title:'Learning World',type:'Education',icon:'📚'},
];

export default function App() {
  const [search,setSearch] = useState('');
  const [tab,setTab] = useState('Home');

  return (
    <View style={s.main}>
      <StatusBar barStyle="light-content" backgroundColor="#090909"/>
      <View style={s.header}>
        <Text style={s.logo}>TN STUDIO</Text>
        <Text style={s.tag}>YOUR WORLD OF ENTERTAINMENT</Text>
      </View>

      <ScrollView style={s.body}>
        <Text style={s.welcome}>Welcome to TN Studio</Text>
        <Text style={s.sub}>Movies, Web Series & Videos – All in One Place</Text>

        <TextInput
          style={s.search}
          placeholder="Search movies, series, videos..."
          placeholderTextColor="#999"
          value={search}
          onChangeText={setSearch}
        />

        <View style={s.banner}>
          <Text style={s.sub}>WELCOME TO</Text>
          <Text style={s.bannerTitle}>TN STUDIO</Text>
          <Text style={s.sub}>Entertainment without in-app ads</Text>
        </View>

        <Text style={s.heading}>Discover Content</Text>

        {videos.filter(v=>v.title.toLowerCase().includes(search.toLowerCase())).map((v,i)=>(
          <TouchableOpacity key={i} style={s.card}
            onPress={()=>setTab(v.title)}>
            <Text style={s.emoji}>{v.icon}</Text>
            <View>
              <Text style={s.title}>{v.title}</Text>
              <Text style={s.sub}>{v.type}</Text>
              <Text style={s.sub}>TN Studio</Text>
            </View>
          </TouchableOpacity>
        ))}

        {tab!=='Home' && <Text style={s.sub}>Selected: {tab}. Content coming soon!</Text>}
      </ScrollView>

      <View style={s.nav}>
        {['Home','Movies','Series','Videos','Downloads','Profile'].map(t=>(
          <TouchableOpacity key={t} onPress={()=>setTab(t)}>
            <Text style={[s.navText,tab===t && s.active]}>{t}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const s=StyleSheet.create({
  main:{flex:1,backgroundColor:'#090909'},
  header:{padding:18,backgroundColor:'#151515'},
  logo:{color:'#ff3434',fontSize:24,fontWeight:'bold'},
  tag:{color:'#999',fontSize:9},
  body:{padding:14},
  welcome:{color:'white',fontSize:22,fontWeight:'bold',marginTop:10},
  sub:{color:'#aaa',fontSize:11,marginTop:6},
  search:{backgroundColor:'#222',color:'white',padding:14,borderRadius:12,marginTop:20},
  banner:{backgroundColor:'#381719',padding:20,borderRadius:15,marginTop:20},
  bannerTitle:{color:'#ff4444',fontSize:29,fontWeight:'bold'},
  heading:{color:'white',fontSize:19,fontWeight:'bold',marginTop:25,marginBottom:15},
  card:{backgroundColor:'#1c1c1c',padding:18,borderRadius:13,marginBottom:12,flexDirection:'row',alignItems:'center'},
  emoji:{fontSize:32,marginRight:18},
  title:{color:'white',fontWeight:'bold',fontSize:15},
  nav:{flexDirection:'row',justifyContent:'space-around',padding:12,backgroundColor:'#171717'},
  navText:{color:'#aaa',fontSize:10},
  active:{color:'#ff4444',fontWeight:'bold'}
});