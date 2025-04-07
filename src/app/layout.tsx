import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/components/ui/provider";

export const metadata: Metadata = {
	title: "Harun Al Rasyid",
	description: "Harun Al Rasyid's Personal Website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body>
				<Provider>{children}</Provider>
			</body>
		</html>
	);
}
