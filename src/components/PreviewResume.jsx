import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea, Container, Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import Cascade from '../resume-templates/Cascade';
import Straight from '../resume-templates/Straight';


export default function PreviewResume() {

    return (
        <div className='short-preview-page'>
            <Navbar />
            <Container sx={{ marginTop: 4 }}>
                <Grid container spacing={2}>
                    <Grid item xs={3} component={Link} to='/preview-resume/cascade' sx={{ textDecoration: "none" }}>
                        <Card >
                            <CardActionArea>
                                <CardMedia
                                    component={Cascade}
                                    height="140"
                                />
                                <CardContent>
                                    <Typography variant="h6" component="h6">
                                        Cascade
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={3} component={Link} to='/preview-resume/straight' sx={{ textDecoration: "none" }}>
                        <Card >
                            <CardActionArea>
                                <CardMedia
                                    component={Straight}
                                    height="140"
                                />
                                <CardContent>
                                    <Typography variant="h6" component="h6">
                                        Straight
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}
