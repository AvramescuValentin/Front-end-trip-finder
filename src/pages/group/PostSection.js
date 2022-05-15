import { Box, Card, CardActionArea, CardContent, Container, Typography } from '@mui/material';
import React from 'react';
import Copyright from '../../components/shared/Copyright';
import FloatingButton from '../../components/shared/FloatingButton';
import "./../../style/Style.css";


const PostSection = (props) => {


    return (
        <div>
            <Container>
                <Card >
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                posuere arcu sed arcu congue, rhoncus tristique velit malesuada. Nam
                                consequat nulla augue, id posuere odio feugiat nec. Phasellus quis
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                                posuere arcu sed arcu congue, rhoncus tristique velit malesuada. Nam
                                consequat nulla augue, id posuere odio feugiat nec. Phasellus quis
                                mollis orci, ac tempus mauris. Phasellus sit amet semper odio. Fusce
                                porta libero sit amet risus elementum blandit. Orci varius natoque
                                penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                Praesent ut malesuada velit. Nullam condimentum ac nunc ultricies
                                varius. Vestibulum ut urna ac nisi hendrerit condimentum. Vestibulum
                                dolor urna, ultrices at massa quis, imperdiet dignissim libero.
                                Nulla varius, magna sed malesuada tincidunt, magna dolor placerat
                                magna, sed semper erat tortor in ligula. Praesent tincidunt, metus
                                vitae semper tristique, nisl elit rhoncus elit, nec eleifend velit
                                ex id nibh. Mauris fringilla laoreet neque, vel aliquet justo
                                molestie sit amet. Ut finibus vulputate lacus, vel feugiat elit
                                ultricies vel. Morbi venenatis lacus venenatis, tristique urna sit
                                amet, consequat urna. Quisque ac magna nunc. In ac ex et quam
                                lacinia lobortis. Fusce non cursus elit. Proin vitae lobortis purus.
                                Vestibulum porta, neque sed molestie aliquam, arcu ligula ornare
                                sapien, at ullamcorper mi nibh id eros. Suspendisse potenti. Nunc et
                                dictum purus. Sed ac velit vitae mauris iaculis tempor. In euismod
                                in diam in pharetra. Curabitur mollis pellentesque nisi. Donec
                                ullamcorper ligula urna, ac viverra nunc pretium eu. Orci varius
                                natoque penatibus et magnis dis parturient montes, nascetur
                                ridiculus mus. Duis bibendum posuere leo sit amet elementum. Aliquam
                                molestie, augue at tincidunt porta, neque augue sollicitudin arcu,
                                ac blandit lorem mauris sit amet felis. Class aptent taciti sociosqu
                                ad litora torquent per conubia nostra, per inceptos himenaeos. Cras
                                sollicitudin mi nibh, quis aliquet enim suscipit et. Vivamus ut
                                sagittis sem, a tempor ipsum. Cras viverra varius quam, eget
                                tincidunt ex rutrum nec. Aenean posuere ante eget orci tempor
                                ultrices.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Container>
            <FloatingButton className='floating__button' />
            <Copyright />
        </div>
    )
}

export default PostSection;