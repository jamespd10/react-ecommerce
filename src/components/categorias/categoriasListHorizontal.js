import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import image from '../../assets/image/joker.jpg';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    margin: theme.spacing(3),
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));

export default function CategoriasListHorizontal() {
  const classes = useStyles();
  const tileData = [
    {
      img: image,
      title: 'Image1',
      author: 'author',
    },
    {
      img: image,
      title: 'Image2',
      author: 'author',
    },
    {
      img: image,
      title: 'Image3',
      author: 'author',
    },
    {
      img: image,
      title: 'Image4',
      author: 'author',
    },
    {
      img: image,
      title: 'Image5',
      author: 'author',
    },
  ];

  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5}>
        {tileData.map((tile) => (
          <GridListTile key={tile.title}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title='{tile.title}'
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              actionIcon={
                <Button component={Link} to="category" color="primary">
                  Link
                </Button>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}