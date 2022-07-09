import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import DescriptionIcon from '@mui/icons-material/Description';
import GroupsIcon from '@mui/icons-material/Groups';
import ShopIcon from '@mui/icons-material/Shop';
import PeopleIcon from '@mui/icons-material/People';
import SettingsIcon from '@mui/icons-material/Settings';
import FaceIcon from '@mui/icons-material/Face';
import Switch from '@mui/material/Switch';
import ModeNightIcon from '@mui/icons-material/ModeNight';



const MUISideBar = () => {

	const label = { inputProps: { 'aria-label': 'Switch demo' } };




	return (
		<Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }} >

			<List>
				<ListItem disablePadding>
					<ListItemButton component="a" href="/mui">
						<ListItemIcon>
							<HomeIcon />
						</ListItemIcon>
						<ListItemText primary="Homepage" />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton component="a" href="/mui">
						<ListItemIcon>
							<DescriptionIcon />
						</ListItemIcon>
						<ListItemText primary="Pages" />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton component="a" href="/mui">
						<ListItemIcon>
							<GroupsIcon />
						</ListItemIcon>
						<ListItemText primary="Groups" />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton component="a" href="/mui">
						<ListItemIcon>
							<ShopIcon />
						</ListItemIcon>
						<ListItemText primary="Marketplace" />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton component="a" href="/mui">
						<ListItemIcon>
							<PeopleIcon />
						</ListItemIcon>
						<ListItemText primary="Friends" />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton component="a" href="/mui">
						<ListItemIcon>
							<SettingsIcon />
						</ListItemIcon>
						<ListItemText primary="Settings" />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton component="a" href="/mui">
						<ListItemIcon>
							<FaceIcon />
						</ListItemIcon>
						<ListItemText primary="Profile" />
					</ListItemButton>
				</ListItem>
				<ListItem disablePadding>
					<ListItemButton component="a" href="/mui">
						<ListItemIcon>
							<ModeNightIcon />
						</ListItemIcon>
						<Switch {...label} color="primary" />
					</ListItemButton>
				</ListItem>


			</List>
		</Box>
	);
};

export default MUISideBar;