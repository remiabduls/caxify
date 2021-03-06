import React from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "./BottomCard.css";

function BottomCard() {
  return <div className='bottomcard'>
       <Card
        style={{
          width: 400,
          backgroundColor: "#F0F8FF",
        }}
      >
        <CardContent>
          <Typography
            style={{ fontSize: 14 }}
            color="textSecondary"
            gutterBottom
          >
            Greetings of the day
          </Typography>
          <Typography variant="h5" component="h2">
            How are you ?
          </Typography>
          <Typography
            style={{
              marginBottom: 12,
            }}
            color="textSecondary"
          >
            Keep Motivated
          </Typography>
          <Typography variant="body2" component="p">
            Stay Happy
          </Typography>
        </CardContent>
        
      </Card>
      <Card
        style={{
          width: 400,
          backgroundColor: "#F0F8FF",
        }}
      >
        <CardContent>
          <Typography
            style={{ fontSize: 14 }}
            color="textSecondary"
            gutterBottom
          >
            Greetings of the day
          </Typography>
          <Typography variant="h5" component="h2">
            How are you ?
          </Typography>
          <Typography
            style={{
              marginBottom: 12,
            }}
            color="textSecondary"
          >
            Keep Motivated
          </Typography>
          <Typography variant="body2" component="p">
            Stay Happy
          </Typography>
        </CardContent>
        
      </Card>
      <Card
        style={{
          width: 400,
          backgroundColor: "#F0F8FF",
        }}
      >
        <CardContent>
          <Typography
            style={{ fontSize: 14 }}
            color="textSecondary"
            gutterBottom
          >
            Greetings of the day
          </Typography>
          <Typography variant="h5" component="h2">
            How are you ?
          </Typography>
          <Typography
            style={{
              marginBottom: 12,
            }}
            color="textSecondary"
          >
            Keep Motivated
          </Typography>
          <Typography variant="body2" component="p">
            Stay Happy
          </Typography>
        </CardContent>
        
      </Card>



  </div>;
}

export default BottomCard;
