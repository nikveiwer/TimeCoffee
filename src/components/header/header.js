import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CoffeeIcon from '@mui/icons-material/Coffee';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import Divider from '@mui/material/Divider';


const Header = () => {
return (
<Box sx={{ flexGrow: 1 }}>
	<AppBar position="static">
		<Toolbar>
			<IconButton
				size="large"
				edge="start"
				color="inherit"
				aria-label="menu"
				sx={{ mr: 2 }}
			>
				<CoffeeIcon />
			</IconButton>
				<Typography lineHeight={"18px"} fontSize={"17px"} variant="h6" component="h1" sx={{ flexGrow: 2 }}>
					TimeCoffee
					<br/>
					<span style={{"fontSize": "12px"}}>Закажите здесь, заберите<br/> в любой нашей точке без очереди</span>
				</Typography>
			<Button variant="contained" endIcon={<ShoppingBasketIcon />}>
				<Box textTransform={"none"} mr={"10px"}>424р.</Box>
				<Divider color={"white"} orientation="vertical" flexItem />
				<Box ml={"10px"}>{4}</Box>
			</Button>
		</Toolbar>
	</AppBar>
</Box>
)
}

export default Header;