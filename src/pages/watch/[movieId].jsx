import { useRouter } from "next/router";

const Watch = () => {

const router = useRouter()
const {movieId} = router.query;    


return (
    <div>Watch {movieId}</div>
)

}

export default Watch;