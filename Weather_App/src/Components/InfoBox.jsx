import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import "./InfoBox.css"


function InfoBox({info}) {    
    const COLD_URL = "https://images.unsplash.com/photo-1457269449834-928af64c684d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const HOT_URL = "https://images.unsplash.com/photo-1543379352-68ea413990d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const RAINY_URL = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"

    return (
    <div className='cardContainer'>
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAINY_URL : info.temp > 15 ? HOT_URL : COLD_URL }
        title="green iguana"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {info.city } {
            <WbSunnyIcon/> > 80 ? RAINY_URL : <ThunderstormIcon/> > 15 ? HOT_URL : <AcUnitIcon/>
            }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <p>Temperature : {info.temp}&deg;C</p>
            <p>Feels Like : {info.feelsLike}&deg;C</p>
            <p>Humidty : {info.humidity}</p>
            <p>Temperature Max : {info.tempMax}&deg;C</p>
            <p>Temperature Min  : {info.tempMin}&deg;C</p>
            <p>The weather is described as <b><i>{info.weather}</i></b> and feels like {info.feelsLike}</p>
        </Typography>
        </CardContent>
    </Card>
        
        
    </div>
    )
}

export default InfoBox
