import React from 'react'
import {
  Box,
  Grid,
  Switch,
  Typography,
  Collapse,
  FormControlLabel,
  Divider,
  makeStyles
} from '@material-ui/core'
import RepositoryCard from './RepositoryCard.jsx'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
  },
  headerBox: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    alignItems: 'center'
  },
  header3: {
    marginTop: theme.spacing(2),
    color: '#636363'
  },
  formControl: {
    paddingLeft: theme.spacing(2)
  },
  loaderBox: {
    display: 'flex',
    justifyContent: 'center',
    padding: theme.spacing(2),
    width: '100%'
  },
  hr: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1)
  }
}))

const GridItem = (props) => (
  <Grid item xs={12} sm={12} lg={3} md={4}>
    <Collapse
      mountOnEnter
      unmountOnExit
      in={props.checked}
      style={{ transformOrigin: '0 0 0' }}
      {...(props.checked ? { timeout: 1000 } : {})}>
      <RepositoryCard repo={props.repo} />
    </Collapse>
  </Grid>
)

export default function RepositoryList(props) {
  const classes = useStyles()
  const [checked, setChecked] = React.useState(false)
  const { data, isLoading } = props

  const handleChecked = () => {
    setChecked((prev) => !prev)
  }

  return (
    <>
      <Box className={classes.headerBox}>
        <Typography variant="h3" className={classes.header3}>
          Pinned Repos
        </Typography>
        <FormControlLabel
          className={classes.formControl}
          control={<Switch checked={!checked} onChange={handleChecked} />}
          label={checked ? 'Hide' : 'Show'}
        />
      </Box>
      {isLoading ? (
        <Box className={classes.loaderBox}>{props.fallback()}</Box>
      ) : (
        <Grid
          container
          alignItems="flex-start"
          wrap="wrap"
          xl="auto"
          spacing={1}>
          {data &&
            data.data.user.pinnableItems.nodes.map((repo) => (
              <GridItem
                key={JSON.stringify(repo)}
                repo={repo}
                checked={checked}
              />
            ))}
        </Grid>
      )}
      <Divider className={classes.hr} />
    </>
  )
}
