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
            <Card style={tailwind("w-64 mr-2 mb-3")} elevation={4}>
                <Card.Cover source={{uri: this.props.image}}/>
                <Card.Content>
                    <Title>{this.props.title}</Title>
                    <Paragraph>{this.props.date}</Paragraph>
                </Card.Content>

            </Card>
        )
    }
};
