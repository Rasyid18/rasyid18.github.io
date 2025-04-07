import { Box, Container, Heading, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<Box minH="100vh" py={10}>
			<Container maxW="container.md">
				<Heading as="h1" size="xl" mb={4}>
					Harun Al Rasyid
				</Heading>
				<Text mb={8} fontSize="lg">
					Full Stack Developer • Laravel • MariaDB • React JS
				</Text>
				{children}
			</Container>
		</Box>
	);
}
