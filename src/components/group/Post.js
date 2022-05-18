import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import React from "react";

const Post = (props) => {
    return (
        <Card>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        {props.title}
                    </Typography>
                    <Typography variant="caption" gutterBottom color="text.secondary">
                        by <b>{props.author}</b> <br /> at <b>{props.timeStamp}</b>
                    </Typography>
                    <Typography variant="body1" color="text.primary">
                        {props.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default Post;