import { Box, Container, DataList, Heading, HStack, Image, Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
	return (
		<Box minH="100vh" py={10}>
			<Container maxW="6xl">
				<HStack gap={10} pb={8}>
					<Image src="/static/images/my-profile.jpg" alt="my-profile" maxW={40} />
					<Stack direction="column" gap={2}>
						<Heading as="h1" size="xl">
							Harun Al Rasyid
						</Heading>
						<Text fontSize="lg">
							Full Stack Developer • Laravel • MariaDB • React JS
						</Text>
						<DataList.Root orientation={"horizontal"} size={"sm"}>
							<DataList.Item fontSize={"sm"}>
								<DataList.ItemLabel>Phone</DataList.ItemLabel>
								<DataList.ItemValue>+6285318900984</DataList.ItemValue>
							</DataList.Item>
							<DataList.Item fontSize={"sm"}>
								<DataList.ItemLabel>Email</DataList.ItemLabel>
								<DataList.ItemValue>work.rasyid@gmail.com</DataList.ItemValue>
							</DataList.Item>
						</DataList.Root>
					</Stack>
				</HStack>
				{children}
			</Container>
		</Box>
	);
}
