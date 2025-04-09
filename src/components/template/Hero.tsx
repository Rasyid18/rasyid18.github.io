// components/Hero.tsx
import { Box, Container, Heading, Text, Button, Stack, HStack, IconButton, Image } from "@chakra-ui/react";
import { FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa";

export default function Hero() {
	return (
		<Box as="section" pt={12} pb={12} mb={8} bg="gray.200">
			<Container maxW="container.md" textAlign="center">
				<Stack direction={{md: "row", smDown: "column"}} alignItems={{smDown: "center"}} gap={10} pt={8} pb={8}>
					<Image src="/static/images/my-profile.jpg" alt="my-profile" maxW={80} fit={"contain"} />
					<Stack direction="column" gap={2}>
						<Heading as="h1" size="2xl" mb={4} color={"gray.700"}>
							Harun Al Rasyid - Empowering Businesses with Scalable Web Solutions
						</Heading>
						<Text fontSize="lg" mb={6} color="gray.600">
							My mission is to build powerful, user-friendly web solutions that help businesses grow and operate more efficiently.
						</Text>
						<Stack direction={{ base: "column", sm: "row" }} gap={4} justify="center" mb={8}>
							<Button colorScheme="teal" size="lg" _hover={{ bg: "teal.600" }}>
								<a href="/static/Harun Al Rasyid CV.en.pdf" download={true}>
									Download Resume
								</a>
							</Button>
							{/* <Button variant="outline" size="lg" color={"gray.600"}>
								<a href="#contact">Contact Me</a>
							</Button> */}
						</Stack>
						<HStack gap={4} justify="center">
							<IconButton aria-label="GitHub" size="lg">
								<a href="https://github.com/rasyid18">
									<FaGithub />
								</a>
							</IconButton>
							<IconButton aria-label="GitHub" size="lg">
								<a href="https://gitlab.com/rasyid.jtk11">
									<FaGitlab />
								</a>
							</IconButton>
							<IconButton aria-label="LinkedIn" size="lg">
								<a href="https://linkedin.com/in/harun-al-rasyid-76189872">
									<FaLinkedin />
								</a>
							</IconButton>
						</HStack>
					</Stack>
				</Stack>
			</Container>
		</Box>
	);
}
