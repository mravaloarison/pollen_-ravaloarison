import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import GlobalStyles from "@mui/joy/GlobalStyles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import IconButton from "@mui/joy/IconButton";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import Stack from "@mui/joy/Stack";
import { EmojiNature } from "@mui/icons-material";
import GoogleLogo from "./googleLogo";

export default function Login() {
	return (
		<CssVarsProvider disableTransitionOnChange>
			<CssBaseline />
			<GlobalStyles
				styles={{
					":root": {
						"--Form-maxWidth": "800px",
						"--Transition-duration": "0.4s",
					},
				}}
			/>
			<Box
				sx={(theme) => ({
					width: { xs: "100%", md: "50vw" },
					transition: "width var(--Transition-duration)",
					transitionDelay: "calc(var(--Transition-duration) + 0.1s)",
					position: "relative",
					zIndex: 1,
					display: "flex",
					justifyContent: "flex-end",
					backdropFilter: "blur(12px)",
					backgroundColor: "rgba(255 255 255 / 0.2)",
					[theme.getColorSchemeSelector("dark")]: {
						backgroundColor: "rgba(19 19 24 / 0.4)",
					},
				})}
			>
				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						minHeight: "100dvh",
						width: "100%",
						px: 2,
					}}
				>
					<Box
						component="header"
						sx={{
							py: 3,
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<Box
							sx={{
								gap: 2,
								display: "flex",
								alignItems: "center",
							}}
						>
							<IconButton
								variant="soft"
								color="success"
								size="lg"
							>
								<EmojiNature />
							</IconButton>
							<Typography level="title-lg">
								Pollen Apps
							</Typography>
						</Box>
					</Box>
					<Box
						component="main"
						sx={{
							my: "auto",
							py: 2,
							pb: 5,
							display: "flex",
							flexDirection: "column",
							gap: 2,
							width: 400,
							maxWidth: "100%",
							mx: "auto",
							borderRadius: "sm",
							"& form": {
								display: "flex",
								flexDirection: "column",
								gap: 2,
							},
							[`& .MuiFormLabel-asterisk`]: {
								visibility: "hidden",
							},
						}}
					>
						<Stack sx={{ gap: 4, mb: 2 }}>
							<Stack sx={{ gap: 1 }}>
								<Typography component="h1" level="h3">
									Welcome to Pennapps Project
								</Typography>
								<Typography level="body-sm">
									New to company?{" "}
									<Link
										href="#replace-with-a-link"
										level="title-sm"
									>
										Sign up!
									</Link>
								</Typography>
							</Stack>
							<Button
								variant="soft"
								color="neutral"
								size="lg"
								fullWidth
								startDecorator={<GoogleLogo />}
							>
								Continue with Google
							</Button>
						</Stack>
					</Box>
					<Box component="footer" sx={{ py: 3 }}>
						<Typography
							level="body-xs"
							sx={{ textAlign: "center" }}
						>
							© By Rava, {new Date().getFullYear()}
						</Typography>
					</Box>
				</Box>
			</Box>
			<Box
				sx={(theme) => ({
					height: "100%",
					position: "fixed",
					right: 0,
					top: 0,
					bottom: 0,
					left: { xs: 0, md: "50vw" },
					transition:
						"background-image var(--Transition-duration), left var(--Transition-duration) !important",
					transitionDelay: "calc(var(--Transition-duration) + 0.1s)",
					backgroundColor: "background.level1",
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
					backgroundImage:
						"url(https://images.unsplash.com/reserve/yra1GBrGTB65qtZpFaly_day%202.jpg?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
					[theme.getColorSchemeSelector("dark")]: {
						backgroundImage:
							"url(https://images.unsplash.com/reserve/yra1GBrGTB65qtZpFaly_day%202.jpg?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
					},
				})}
			/>
		</CssVarsProvider>
	);
}
