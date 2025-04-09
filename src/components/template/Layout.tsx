import { Box, Container } from "@chakra-ui/react";
import { ReactNode } from "react";
import Hero from "./Hero";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<Box minH="100vh" py={10}>
			<Container maxW="6xl">
				<Hero />
				{children}
			</Container>
		</Box>
	);
}
