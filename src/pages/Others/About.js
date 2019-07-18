import React, { Component } from 'react';
import '../../App.css';
import Menu from '../../components/Menu/Menu';
import Avatar from '../../components/Account/Avatar';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Footer from '../../components/Footer/Footer';

class Users extends Component {
  render() {
    return (
        <div>
            <Menu />
            <main>
                <center><Avatar/>      
                    <Typography variant="h4" color="inherit">
                        Big Trouble Restaurant and Bar 
                    </Typography>
                    <br />
                    <Grid item xs={24}>
                        <Typography variant="h7" >460 Dundas St W 2nd floor</Typography>
                    </Grid>  
                    <br />
                    <Grid item xs={24}>
                        <Typography variant="h7" >647.347.8880</Typography>
                    </Grid>  
                    <br />
                    <Grid item xs={24}>
                        <Typography variant="h7" >Instagram:<Link href="https://www.instagram.com/bigtroublebar/"> @bigtroublebar</Link></Typography>
                    </Grid>  
                    <br />
                    <Grid item xs={24}>
                        <Typography variant="h7" >Directions:<Link href="https://www.google.com/maps/place/Big+Trouble/@43.6533666,-79.3986777,17z/data=!3m1!4b1!4m5!3m4!1s0x882b35129cc628c9:0x872f6d27e89059de!8m2!3d43.6533666!4d-79.396489"> Google Map</Link></Typography>
                    </Grid>  
                </center> 
            </main>
            <Footer/>
        </div>
    );
  }
}

export default Users;
