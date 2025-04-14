import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import "./globals.css"

export const metadata: Metadata = {
	title: "Portfólio - Augusto Sousa",
	description: "Portfólio de projetos de desenvolvimento Web e Mobile",
}

const fonte = Montserrat({
	subsets: ["latin"],
})

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR">
			<body className={`${fonte.className} antialiased`}>{children}</body>
		</html>
	)
}
