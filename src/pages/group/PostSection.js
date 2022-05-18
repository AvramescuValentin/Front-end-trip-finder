import { Backdrop, Box, Card, CardActionArea, CardContent, CircularProgress, Container, Typography } from '@mui/material';
import React, { useEffect, useState, useContext } from 'react';
import Copyright from '../../components/shared/Copyright';
import FloatingButton from '../../components/shared/FloatingButton';
import "./../../style/Style.css";
import { useParams } from 'react-router-dom';
import { useHttpClient } from './../../util/http-hook';
import { AuthContext } from "./../../util/auth-context";
import Post from '../../components/group/Post';

const PostSection = (props) => {
    const auth = useContext(AuthContext);
    const { isLoading, error, sendRequest, clearError } = useHttpClient();
    const groupId = useParams().groupId;
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchGroups = async () => {
            try {
                const responseData = await sendRequest(
                    `group/post/${groupId}`,
                    'GET',
                    null,
                    {
                        Authorization: 'Bearer ' + auth.token
                    }
                );
                setPosts(responseData.posts);
            } catch (err) { }
        };
        fetchGroups();
    }, [sendRequest])

    return (
        <div>

            <Container>
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={isLoading}

                >
                    <CircularProgress color="inherit" />
                </Backdrop>
                {posts.map(element => {
                    return (
                        <Post
                            key={element.timeStamp}
                            timeStamp={element.timeStamp}
                            author={element.author}
                            title={element.title}
                            description={element.description}
                        />
                    )
                })}
            </Container>
            <FloatingButton className='floating__button' groupId={groupId} type={'addPost'} />
            <Copyright />
        </div>
    )
}

export default PostSection;