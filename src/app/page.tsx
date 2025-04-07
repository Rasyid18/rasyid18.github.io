"use client";

import { Box, Card, Link, List, Mark, Separator, Stack, Text, Timeline, VStack } from "@chakra-ui/react";
import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import { LuCheck, LuCode } from "react-icons/lu";

const sections = ["about", "skills", "experience", "education"];

function useScrollSpy(sectionIds: string[], offset = 0) {
	const [activeId, setActiveId] = useState<string>("");

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveId(entry.target.id);
					}
				});
			},
			{
				rootMargin: `-${offset}px 0px -70% 0px`,
				threshold: 0.1,
			}
		);

		sectionIds.forEach((id) => {
			const el = document.getElementById(id);
			if (el) observer.observe(el);
		});

		return () => observer.disconnect();
	}, [sectionIds, offset]);

	return activeId;
}

export default function Home() {
	const activeSection = useScrollSpy(sections, 80);

	return (
		<Layout>
			<Stack direction="row" gap={8}>
				<Stack gap={10}>
					<Box id={"about"} key={"about"}>
						<Card.Root variant="elevated">
							<Card.Body>
								<Card.Title>About Me</Card.Title>
								<Card.Description>
									Professional full-stack web developer with 9+ years of experience specializing in JavaScript, React.js, PHP,
									and Laravel. Led the development of dropshipping websites that empower resellers to sell products seamlessly
									without managing inventory. Additionally, improved company efficiency by designing and developing internal
									support systems, including procurement, finance, and attendance management web applications.
								</Card.Description>
							</Card.Body>
						</Card.Root>
					</Box>

					<Box id={"skills"} key={"skills"}>
						<Card.Root variant="elevated">
							<Card.Body>
								<Card.Title>Technical Skills & Tools</Card.Title>
								<Card.Description>
									PHP • Laravel • MySQL • MariaDB • MongoDB • React JS • Next JS • HTML5 • JavaScript • jQuery • CSS3 •
									SASS/SCSS • JWT • OAuth • Visual Studio Code • XAMPP
								</Card.Description>
							</Card.Body>
						</Card.Root>
					</Box>

					<Box id={"experience"} key={"experience"}>
						<Stack>
							<Card.Root variant="elevated">
								<Card.Body>
									<Card.Title>Work Experiences</Card.Title>
								</Card.Body>
							</Card.Root>
							<Timeline.Root paddingStart={15}>
								<Timeline.Item>
									<Timeline.Connector>
										<Timeline.Separator />
										<Timeline.Indicator>
											<LuCode />
										</Timeline.Indicator>
									</Timeline.Connector>
									<Timeline.Content>
										<Timeline.Title>Senior Web Developer</Timeline.Title>
										<Timeline.Description>Jakgros Multi Niaga CV - Bandung, West Java</Timeline.Description>
										<Timeline.Description>Sep 2016 - Current</Timeline.Description>
										<List.Root>
											<List.Item>
												Built responsive and scalable web applications using React.js, Node.js, PHP, and Laravel
											</List.Item>
											<List.Item>
												Spearheaded the migration of legacy applications to modern frameworks, enhancing security and
												performance
											</List.Item>
											<List.Item>
												Led the development of multiple dropshipping platforms, empowering resellers to sell products
												seamlessly without managing inventory
											</List.Item>
											<List.Item>
												Played a key role in sustaining company operations by driving online sales growth during the
												pandemic
											</List.Item>
											<List.Item>
												Implemented RESTful APIs and third - party integrations, improving platform capabilities
											</List.Item>
											<List.Item>
												Designed and built internal support systems, including procurement, finance, and attendance
												tracking web applications, improving company efficiency
											</List.Item>
											<List.Item>
												Optimized application performance, reducing load times through code refactoring and database
												optimization
											</List.Item>
											<List.Item>
												Collaborated with cross - functional teams, ensuring smooth deployment and integration of new
												features
											</List.Item>
										</List.Root>
									</Timeline.Content>
								</Timeline.Item>
								<Timeline.Item>
									<Timeline.Connector>
										<Timeline.Separator />
										<Timeline.Indicator>
											<LuCheck />
										</Timeline.Indicator>
									</Timeline.Connector>
									<Timeline.Content>
										<Timeline.Title>Web Developer</Timeline.Title>
										<Timeline.Description>Pets.id (No longer active) - North Jakarta, DKI Jakarta</Timeline.Description>
										<Timeline.Description>Oct 2016 - Aug 2017</Timeline.Description>
										<List.Root>
											<List.Item>
												Designed, developed, and maintained dynamic web applications using PHP and Laravel, ensuring
												scalability and high performance
											</List.Item>
											<List.Item>
												Built and optimized websites to enhance stability, resulting in minimal downtime and improved
												user experience
											</List.Item>
											<List.Item>
												Implemented new features and enhanced existing functionality based on client and stakeholder
												requirements, improving usability and engagement
											</List.Item>
											<List.Item>
												Worked closely with designers to translate UI/UX concepts into responsive, visually appealing web
												interfaces
											</List.Item>
											<List.Item>
												Assisted the mobile development team by creating robust APIs and contributing to app page
												development, ensuring seamless integration with backend services
											</List.Item>
										</List.Root>
									</Timeline.Content>
								</Timeline.Item>
								<Timeline.Item>
									<Timeline.Connector>
										<Timeline.Separator />
										<Timeline.Indicator>
											<LuCheck />
										</Timeline.Indicator>
									</Timeline.Connector>
									<Timeline.Content>
										<Timeline.Title>Software Developer</Timeline.Title>
										<Timeline.Description>Royal Audrey Megah PT - North Jakarta, DKI Jakarta</Timeline.Description>
										<Timeline.Description>Sep 2015 - Sep 2016</Timeline.Description>
										<List.Root>
											<List.Item>
												Designed and developed multiple internal applications, primarily for Android using Android
												Studio, and some web - based apps built with JavaScript
											</List.Item>
											<List.Item>
												Analyzed and optimized existing applications, identifying areas for improvement and implementing
												enhancements for better performance and usability
											</List.Item>
											<List.Item>
												Developed and tested clean, efficient, and maintainable code for various software projects,
												ensuring high reliability and smooth functionality
											</List.Item>
											<List.Item>
												Collaborated with cross - functional teams to troubleshoot and resolve software bugs, improving
												system stability and user experience
											</List.Item>
										</List.Root>
									</Timeline.Content>
								</Timeline.Item>
								<Timeline.Item>
									<Timeline.Connector>
										<Timeline.Separator />
										<Timeline.Indicator>
											<LuCheck />
										</Timeline.Indicator>
									</Timeline.Connector>
									<Timeline.Content>
										<Timeline.Title>IT Support</Timeline.Title>
										<Timeline.Description>Ticktab.com (No longer active) - North Jakarta, DKI Jakarta</Timeline.Description>
										<Timeline.Description>Sep 2014 - Aug 2015</Timeline.Description>
										<List.Root>
											<List.Item>
												Designed, developed, and maintained a hotel booking website using PHP, Laravel, and Vue.js,
												ensuring a seamless user experience
											</List.Item>
											<List.Item>
												Optimized website performance, reducing load times and minimizing downtime for a smooth and
												efficient booking process
											</List.Item>
											<List.Item>
												Integrated multiple Channel Manager services to synchronize real - time booking availability,
												enhance service offerings, and improve operational efficiency
											</List.Item>
										</List.Root>
									</Timeline.Content>
								</Timeline.Item>
							</Timeline.Root>
						</Stack>
					</Box>

					<Box id={"education"} key={"education"}>
						<Stack>
							<Card.Root variant="elevated">
								<Card.Body>
									<Card.Title>Educations</Card.Title>
								</Card.Body>
							</Card.Root>
							<Timeline.Root paddingStart={15}>
								<Timeline.Item>
									<Timeline.Connector>
										<Timeline.Separator />
										<Timeline.Indicator>
											<LuCheck />
										</Timeline.Indicator>
									</Timeline.Connector>
									<Timeline.Content>
										<Timeline.Title>
											<Mark variant="text">Bachelor&apos;s Degree</Mark> in <Mark variant="text">Information System</Mark>
										</Timeline.Title>
										<Timeline.Description>
											<Stack direction="row">
												<Text>Bina Nusantara University (Binus)</Text>
												<Separator orientation="vertical" height={4} />
												<Text>DKI Jakarta</Text>
											</Stack>
										</Timeline.Description>
										<Timeline.Description>Sep 2019</Timeline.Description>
									</Timeline.Content>
								</Timeline.Item>
								<Timeline.Item>
									<Timeline.Connector>
										<Timeline.Separator />
										<Timeline.Indicator>
											<LuCheck />
										</Timeline.Indicator>
									</Timeline.Connector>
									<Timeline.Content>
										<Timeline.Title>
											<Mark variant="text">Associate&apos;s Degree</Mark> in{" "}
											<Mark variant="text">Computer and Informatics Engineering</Mark>
										</Timeline.Title>
										<Timeline.Description>
											<Stack direction="row">
												<Text>Bandung State Polytechnic (Polban)</Text>
												<Separator orientation="vertical" height={4} />
												<Text>West Java</Text>
											</Stack>
										</Timeline.Description>
										<Timeline.Description>Sep 2014</Timeline.Description>
									</Timeline.Content>
								</Timeline.Item>
							</Timeline.Root>
						</Stack>
					</Box>
				</Stack>

				<Box width={100}>
					<VStack as="nav" position="fixed" right={4} top="20vh" align="flex-end" gap={4}>
						{sections.map((section) => (
							<Link
								key={section}
								href={`#${section}`}
								fontWeight={activeSection === section ? "bold" : "normal"}
								color={activeSection === section ? "teal.500" : "gray.600"}
								_hover={{ textDecoration: "underline" }}
							>
								{section.charAt(0).toUpperCase() + section.slice(1)}
							</Link>
						))}
					</VStack>
				</Box>
			</Stack>
		</Layout>
	);
}
