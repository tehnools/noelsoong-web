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
  viewer {
    login
  }
  user(login: "tehnools") {
    repositories(first: 9,orderBy: {field: STARGAZERS, direction: DESC }){
        nodes{
          owner{
            login,
            avatarUrl,
            url
          }
          url
          name
          primaryLanguage{
            name
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
    display: 'flex'
  },
  header3: {
    marginTop: theme.spacing(2),
    color: '#636363'
  },
  formControl: {
    marginLeft: theme.spacing(2)
  }
}))

export default function RepositoryList (props) {
  const classes = useStyles()
  const [hide, setHide] = React.useState(true)
  const { data, loading, error } = useQuery(QUERY_GITHUB_REPOS)

  const handleCheck = () => {
    setHide(prev => !prev)
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
            Repositories
          <FormControlLabel
            className={classes.formControl}
            control={<Switch checked={!hide}
              onChange={handleCheck} />}
            label='Hide'
          />
        </Typography>
      </Box>
      {
        loading && data === null
          ? props.fallback()
          : <Collapse in={hide}>
            <Box className={classes.root}>
              <Grid container
                alignItems='flex-start'
                wrap='wrap'
                xl='auto'
                spacing={1}
              >
                {data && data.user.repositories.nodes.map(repo => <RepositoryCard key={JSON.stringify(repo)} repo={repo} />)}
              </Grid>
            </Box>
          </Collapse>
      }
    </>
  )
}
