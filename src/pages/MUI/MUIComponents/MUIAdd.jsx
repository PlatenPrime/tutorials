import { Avatar, Box, Fab, Modal, styled, TextField, Tooltip, Typography } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import React from 'react';
import { useState } from 'react';



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
				onClose={e => setOpen(true)}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box width={400} height={280} bgcolor="white" p={3} borderRadius={5} >
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
						rows={4}
						placeholder="Some text"
						variant="standard"
					/>
				</Box>
			</StyledModal>













		</>
	);
};

export default MUIAdd;