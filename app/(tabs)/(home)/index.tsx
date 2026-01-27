import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "@/constants/colors";
import OverviewSection from "@/components/OverviewSection";
import HeaderSection from "@/components/HeaderSection";
import MovieCard from "@/components/MovieCard";
import { myMockMoviesData } from "@/mock-data";
import ContinueWatchingMovieCard from "@/components/ContinueWatchingMovieCard";





const HomeScreen = () => {
return (
    <View style={styles.containerr}>
           <ScrollView>
                <OverviewSection/>

                <View>
                            <HeaderSection title="Trending now 🔥 " actionTextRight="See More" />
                            
                            
                            {/*FlatList component requires two mandatory data-related props: data and renderItem*/}
                            <FlatList data={myMockMoviesData} 
                            horizontal 
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item)=>item.id}
                            renderItem={({item}) =>( <MovieCard title={item.title} genres={item.genre} imageMock={item.image} />)}/>
                            
                </View>
                <View>

                            <HeaderSection title="Continue Watching " actionTextRight="See More" />

                            <FlatList data={myMockMoviesData} 
                        horizontal 
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item)=>item.id}
                        renderItem={({item}) =>( <ContinueWatchingMovieCard title={item.title} genres={item.genre} imageMock={item.image} />)}/>

                
                </View>

                <View>
                            <HeaderSection title="New Relases 🚀 " actionTextRight="See More" />
                            
                            
                            {/*FlatList component requires two mandatory data-related props: data and renderItem*/}
                            <FlatList data={myMockMoviesData} 
                            horizontal 
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item)=>item.id}
                            renderItem={({item}) =>( <MovieCard title={item.title} genres={item.genre} imageMock={item.image} />)}/>
                            
                </View>

                <View>
                            <HeaderSection title="International Pics 🌍 " actionTextRight="See More" />
                            
                            
                            {/*FlatList component requires two mandatory data-related props: data and renderItem*/}
                            <FlatList data={[...myMockMoviesData].reverse()} 
                            /*spread content into new array and reverse it*/
                            
                            horizontal 
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={(item)=>item.id}
                            renderItem={({item}) =>( <MovieCard title={item.title} genres={item.genre} imageMock={item.image} />)}/>
                            
                </View>

            </ScrollView>


    </View>

    


    
)
}

export default HomeScreen

const styles = StyleSheet.create({
    containerr:{
        flex:  1,
        backgroundColor: Colors.background,

    },
   
})