import React from 'react'
import {
  Box,
  Grid,
  Switch,
  Typography,
  Collapse,
  FormControlLabel,
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
    padding: theme.spacing(2),
    display: 'flex'
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
  }
}))

export default function RepositoryList (props) {
  const classes = useStyles()
  const [checked, setChecked] = React.useState(true)
  const { data, loading, error } = useQuery(QUERY_GITHUB_REPOS)

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
          <FormControlLabel
            className={classes.formControl}
            control={<Switch checked={!checked}
              onChange={handleChecked} />}
            label='Hide'
          />
        </Typography>
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
                .map(repo => <Grid
                  key={JSON.stringify(repo)}
                  item
                >
                  <Collapse
                    mountOnEnter
                    unmountOnExit
                    in={checked}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(checked ? { timeout: 1000 } : {})}
                  >
                    <RepositoryCard repo={repo}/>
                  </Collapse>
                </Grid>

                )}
            </Grid>
          </Box>

      }
    </>
  )
}
