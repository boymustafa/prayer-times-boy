import React, { Component } from 'react';
import {View, ScrollView, Dimensions, Text} from 'react-native';
import ArticleItem from "./Item";
import tailwind from "tailwind-rn";
const { width } = Dimensions.get('window');

export  class Articles extends Component {

    componentDidMount() {
        setTimeout(() => {this.scrollView.scrollTo({x: -30}) }, 1) // scroll view position fix
    }

    render() {

        const articles = [{
            "key":"1",
            "title":"title 1",
            "image":"https://picsum.photos/id/1043/1200/800",
            "date":"23 Aug",
        },{
            "key":"2",
            "title":"title 2",
            "image":"https://picsum.photos/id/1015/1200/800",
            "date":"23 Aug",
        },
            {
                "key":"3",
                "title":"title 3",
                "image":"https://picsum.photos/id/1018/1200/800",
                "date":"23 Aug",
            }]

        return (
            <View>
                <Text style={tailwind('text-lg mb-3')}>Blog</Text>
                <ScrollView
                    ref={(scrollView) => { this.scrollView = scrollView; }}
                    horizontal= {true}
                    decelerationRate={0}
                    snapToInterval={width - 60}
                    snapToAlignment={"center"}
                    contentInset={{
                        top: 0,
                        left: 30,
                        bottom: 0,
                        right: 30,
                    }}>
                        {articles.map((article) => {
                            return (
                                <ArticleItem  key={article.key} image={article.image} date={article.date} title={article.title} ></ArticleItem>
                            )
                        })}


                </ScrollView>
            </View>
        );
    }
}


