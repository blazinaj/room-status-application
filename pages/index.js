import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, {useState} from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Clock from 'react-live-clock';

const ROOM_STATUSES = {
  OPEN: 'open',
  CHECKED_IN: 'checkedIn',
  TECH_IN: 'techIn',
  DOC_IN: 'docIn'
}

const ROOM_STATUS_DESCRIPTION = {
  [ROOM_STATUSES.OPEN]: "Available for a patient",
  [ROOM_STATUSES.CHECKED_IN]: "A patient is checked in and waiting",
  [ROOM_STATUSES.TECH_IN]: "A patient is being seen by a tech",
  [ROOM_STATUSES.DOC_IN]: "A patient is being seen by a doctor",
}

const ROOM_STATUS_COLOR = {
  [ROOM_STATUSES.OPEN]: "#16e702",
  [ROOM_STATUSES.CHECKED_IN]: "#fff758",
  [ROOM_STATUSES.TECH_IN]: "#ff586b",
  [ROOM_STATUSES.DOC_IN]: "#58bcff",
}

const EXAMPLE_ROOMS = [
  {id: "1", name: "Exam Room 1", status: ROOM_STATUSES.OPEN},
  {id: "2", name: "Exam Room 2", status: ROOM_STATUSES.OPEN},
  {id: "3", name: "Exam Room 3", status: ROOM_STATUSES.OPEN},
  {id: "4", name: "Exam Room 4", status: ROOM_STATUSES.OPEN},
  {id: "5", name: "Exam Room 5", status: ROOM_STATUSES.OPEN},
  {id: "6", name: "Exam Room 6", status: ROOM_STATUSES.OPEN},
]

export default function Home() {

  const [rooms, setRooms] = useState(EXAMPLE_ROOMS);

  const toggleRoomStatus = (id, status) => {
    setRooms(rooms => {
      const foundRoom = rooms.find(item => item.id === id)
      switch (status) {
        case ROOM_STATUSES.OPEN:
          foundRoom.status = ROOM_STATUSES.CHECKED_IN;
          break;
        case ROOM_STATUSES.CHECKED_IN:
          foundRoom.status = ROOM_STATUSES.TECH_IN;
          break;
        case ROOM_STATUSES.TECH_IN:
          foundRoom.status = ROOM_STATUSES.DOC_IN;
          break;
        case ROOM_STATUSES.DOC_IN:
          foundRoom.status = ROOM_STATUSES.OPEN;
          break;
      }
      return [...rooms];
    })
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Room Status</title>
        <meta name="description" content="Displays and sets Room Statuses for a medical office" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div style={{marginBottom: "1.5em"}}>
          <Grid container justifyContent="space-between">
            <Grid item>
              <Typography gutterBottom variant="h5" component="h2">
                Room Manager
              </Typography>

            </Grid>
            <Grid item>
              {/*<Image src="/the-doctors-office-logo.png" alt={'office logo'} height={"3em"} width={"10em"}/>*/}
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="h5" component="h2">
                <Clock format={'hh:mm:ss'} ticking={true} timezone={'US/Pacific'} />
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <Clock format={'dddd, MMMM Do YYYY'} ticking={true} timezone={'US/Pacific'} />
              </Typography>
            </Grid>
          </Grid>
        </div>

        <Grid
          container
          spacing={2}
          justify="center"
          direction="row"
          alignItems="stretch"
        >
          {
            rooms.map((room, index) =>
              <Grid item xs={4} key={room.id + room.index + room.status} >
                <Card
                  className={styles.card}
                  style={{
                    backgroundColor: ROOM_STATUS_COLOR[room.status],
                    opacity: "50%",
                    height: "40vh"
                  }}
                >
                  <CardActionArea
                    style={{height: "100%", textAlign: "center"}}
                    onClick={() => toggleRoomStatus(room.id, room.status)}
                  >
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {room.name}
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                        {ROOM_STATUS_DESCRIPTION[room.status]}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  {/*<CardActions>*/}
                  {/*  <Button size="small" color="primary">*/}
                  {/*    Share*/}
                  {/*  </Button>*/}
                  {/*  <Button size="small" color="primary">*/}
                  {/*    Learn More*/}
                  {/*  </Button>*/}
                  {/*</CardActions>*/}
                </Card>
              </Grid>
            )
          }
        </Grid>
      </main>

      {/*<footer className={styles.footer}>*/}
      {/*  Theme, Contrast, Zoom settings*/}
      {/*</footer>*/}
    </div>
  )
}
