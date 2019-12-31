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
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'
import RepositoryCard from './RepositoryCard.jsx'

const QUERY_GITHUB_REPOS = gql`
{
  user(login: "tehnools") {
    pinnableItems(first: 6) {
      nodes {
        ... on Repository {
          name
          openGraphImageUrl
          primaryLanguage {
            color
            name
          }
          owner{
            login
            url
          }
          url
        }
      }
    }
  }
}

`

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    padding: theme.spacing(1)
  },
  headerBox:
  {
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
  loaderBox:
  {
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

const GridItem = props => <Grid
  item
  xs={12}
  sm={12}
  lg={3}
  md={4}
>
  <Collapse
    mountOnEnter
    unmountOnExit
    in={props.checked}
    style={{ transformOrigin: '0 0 0' }}
    {...(props.checked ? { timeout: 1000 } : {})}
  >
    <RepositoryCard repo={props.repo}/>
  </Collapse>
</Grid>

export default function RepositoryList (props) {
  const classes = useStyles()
  const { data, loading, error } = useQuery(QUERY_GITHUB_REPOS)
  const [checked, setChecked] = React.useState(true)

  const handleChecked = () => {
    setChecked(prev => !prev)
  }

  if (error) {
    return `Error! ${error}`
  }

  return (
    <>
      <Box className={classes.headerBox} >
        <Typography
          variant='h3'
          className={classes.header3}>
            Pinned Repos
        </Typography>
        <FormControlLabel
          className={classes.formControl}
          control={<Switch checked={!checked}
            onChange={handleChecked} />}
          label={checked ? 'Hide' : 'Show'}
        />
      </Box>
      {
        loading || data === null
          ? <Box className={classes.loaderBox}>
            {props.fallback()}
          </Box>
          : <Box className={classes.root}>
            <Grid container
              alignItems='flex-start'
              wrap='wrap'
              xl='auto'
              spacing={1}
            >
              {data && data
                .user
                .pinnableItems
                .nodes
                .map(repo => <GridItem
                  key={JSON.stringify(props.repo)}
                  repo={repo}
                  checked={checked} />)
              }
            </Grid>
          </Box>
      }
      <Divider className={classes.hr}/>
    </>
  )
}
