import { useRouter } from 'next/router'
import Link from 'next/link'
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import useSWR from 'swr'

const fetcher = async (...args) => {
  const res = await fetch(...args);

  return res.json();
};

function Post  () {
  const router = useRouter()
  const { id } = router.query
  console.log(id)
  const {data} = useSWR(`/api/user/${id}`,fetcher)
  if (!data){
    return 'Loading...'
  }
  console.log(data);
;  return (
    //Just for testing purposes. C.Z.
    //Add user component.
    <>
        <Grid>
            <Typography variant="h3" component="h3" gutterBottom>
              {data.name.charAt(0).toUpperCase() + data.name.slice(1)}
            </Typography>
        </Grid>
    </>
  )
}

export default Post;