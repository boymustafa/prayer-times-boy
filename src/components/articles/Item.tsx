import * as React from 'react';
import { Card, Title, Paragraph } from 'react-native-paper';
import tailwind from "tailwind-rn";

interface props {
    image: string;
    date: string;
    title: string;
}

export default class ArticleItem extends React.Component <props> {
    render() {
        return (
            <Card style={tailwind("w-64 mr-4 mb-3")} elevation={4}>
                <Card.Cover style={tailwind('w-64 h-32')}  source={{uri: this.props.image}}/>
                <Card.Content>
                    <Title style={tailwind('text-base leading-5 mt-4')}>{this.props.title}</Title>
                    <Paragraph style={tailwind('text-xs leading-5')}>{this.props.date}</Paragraph>
                </Card.Content>

            </Card>
        )
    }
};
