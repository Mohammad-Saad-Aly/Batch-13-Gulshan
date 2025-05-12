import React from 'react';

import { LikeOutlined, CommentOutlined, ShareAltOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;
const Cards = ({ img, title, description }) => (
    <Card
        style={{ width: 300 }}
        cover={
            <img
                alt="example"
                src={img}
            />
        }
        actions={[
            <LikeOutlined />,
            <CommentOutlined />,
            <ShareAltOutlined />,
        ]}
    >
        <Meta
            avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
            title={title}
            description={description}
        />
    </Card>
);
export default Cards;