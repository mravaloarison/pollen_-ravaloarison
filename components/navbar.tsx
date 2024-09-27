import * as React from "react";
import {
	Box,
	Dropdown,
	IconButton,
	Menu,
	MenuButton,
	MenuItem,
	ListDivider,
	Avatar,
	Typography,
} from "@mui/joy";

import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import OpenInNewRoundedIcon from "@mui/icons-material/OpenInNewRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { EmojiNature } from "@mui/icons-material";

export default function NavBar() {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "row",
				justifyContent: "space-between",
				alignItems: "center",
				width: "100%",
				top: 0,
				px: 1.5,
				py: 1.5,
				zIndex: 10000,
				backgroundColor: "background.body",
				borderBottom: "1px solid",
				borderColor: "divider",
				position: "sticky",
			}}
		>
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					gap: 1.5,
				}}
			>
				<IconButton size="lg" variant="soft" color="success">
					<EmojiNature />
				</IconButton>
				<Typography component="h1" sx={{ fontWeight: "xl" }}>
					Pollen Apps
				</Typography>
			</Box>
			<Box sx={{ display: "flex", flexDirection: "row", gap: 3 }}>
				<Box
					sx={{
						gap: 1,
						alignItems: "center",
						display: "flex",
					}}
				>
					<Dropdown>
						<MenuButton
							variant="plain"
							size="lg"
							sx={{
								maxWidth: "32px",
								maxHeight: "32px",
								borderRadius: "9999999px",
							}}
						>
							<Avatar
								src="https://i.pravatar.cc/40?img=2"
								srcSet="https://i.pravatar.cc/80?img=2"
							/>
						</MenuButton>
						<Menu
							placement="bottom-end"
							size="md"
							sx={{
								zIndex: "99999",
								p: 1,
								gap: 1,
								"--ListItem-radius": "var(--joy-radius-sm)",
							}}
						>
							<MenuItem>
								<Box
									sx={{
										display: "flex",
										alignItems: "center",
									}}
								>
									<Avatar
										src="https://i.pravatar.cc/40?img=2"
										srcSet="https://i.pravatar.cc/80?img=2"
										sx={{ borderRadius: "50%" }}
									/>
									<Box sx={{ ml: 1.5 }}>
										<Typography
											level="title-sm"
											textColor="text.primary"
										>
											Rick Sanchez
										</Typography>
										<Typography
											level="body-xs"
											textColor="text.tertiary"
										>
											rick@email.com
										</Typography>
									</Box>
								</Box>
							</MenuItem>
							<ListDivider />
							<MenuItem>
								<HelpRoundedIcon />
								Help
							</MenuItem>
							<MenuItem>
								<SettingsRoundedIcon />
								Settings
							</MenuItem>
							<ListDivider />
							<MenuItem
								component="a"
								href="https://github.com/mui/material-ui/tree/master/docs/data/joy/getting-started/templates/email"
							>
								Github
								<OpenInNewRoundedIcon />
							</MenuItem>
							<ListDivider />
							<MenuItem>
								<LogoutRoundedIcon />
								Log out
							</MenuItem>
						</Menu>
					</Dropdown>
				</Box>
			</Box>
		</Box>
	);
}
