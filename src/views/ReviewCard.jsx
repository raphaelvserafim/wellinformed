import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function ReviewCard(props) {

    if (props) {
        console.log("props", props)

        const [expanded, setExpanded] = React.useState(false);

        const handleExpandClick = () => {
            setExpanded(!expanded);
        }

        return (
            <Card sx={{ mb: 2 }}>
                <CardHeader avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">R</Avatar>}
                    action={<IconButton aria-label="settings"> <MoreVertIcon /> </IconButton>}
                    title={props.news.item.data.author}
                    subheader={props.news.item.data.posted}
                />
                <CardMedia component="img" height="194" image={props.news.item.data.img} alt={props.news.item.data.title} />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">{props.news.item.data.description}</Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
            </Card>
        );
    }
}
