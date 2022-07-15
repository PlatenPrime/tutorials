import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from '@mui/material';
import { Add as AddIcon, DateRange, DateRangeOutlined } from '@mui/icons-material';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import React from 'react';
import { useState } from 'react';
import EmojiEmotions from '@mui/icons-material/EmojiEmotions';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';



const StyledModal = styled(Modal)(
	{
		display: "flex",
		alignItems: "center",
		justifyContent: "center",


	}
)



const UserBox = styled(Box)(
	{
		display: "flex",
		alignItems: "center",
		gap: "10px",
		marginBottom: "20px",

	}
)

const MUIAdd = () => {

	const [open, setOpen] = useState(false);





	return (
		<>
			<Tooltip onClick={e => setOpen(true)}
				title="Add" sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% -25px)", md: 30 } }}>
				<Fab color="primary" aria-label="add">
					<AddIcon />
				</Fab>
			</Tooltip>

			<StyledModal
				open={open}
				onClose={e => setOpen(false)}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box width={600} height={380} bgcolor="white" p={3} borderRadius={5} bgcolor={"background.default"} color={"text.primary"}  >
					<Typography variant='h6' color="gray" textAlign="center" >
						Create post
					</Typography>
					<UserBox>
						<Avatar alt="Remy Sharp" src="https://i.imgur.com/4ph9Ph2.jpg" >

						</Avatar>

						<Typography fontWeight={500} variant="span">
							Platen Prime
						</Typography>



					</UserBox>

					<TextField
						sx={{ width: "100%" }}
						id="standard-multiline-static"
						multiline
						rows={3}
						placeholder="Some text"
						variant="standard"
					/>
					<Stack direction="row" gap={1} mt={2} mb={3}>
						<EmojiEmotions color='primary' />
						<AddPhotoAlternateIcon color='secondary' />
						<VideoCameraBackIcon color='success' />
						<PersonAddAlt1Icon color='error' />
					</Stack>
					<ButtonGroup variant="contained" aria-label="outlined primary button group" fullWidth>
						<Button >Post</Button>
						<Button sx={{ width: "100px" }} >
							<DateRangeOutlined />
						</Button>

					</ButtonGroup>
				</Box>
			</StyledModal>













		</>
	);
};

export default MUIAdd;