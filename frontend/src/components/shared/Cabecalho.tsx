import Image from "next/image"
import Container from "./Container"
import Link from "next/link"
import Menu from "./Menu"
import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react"

export default function Cabecalho() {
	return (
		<header className="w-full flex items-center h-20 bg-black/50 backdrop-blur-lg">
			<Container className="flex-1 flex justify-center sm:justify-between items-center">
				<div className="flex items-center gap-10">
					<Link href="/" className="hidden sm:block">
						<Image src="/logo.png" alt="Logo" width={56} height={25} />
					</Link>
					<Menu />
				</div>
				<div className="flex gap-4 max-sm:hidden">
					<Link href="https://www.linkedin.com/in/-augusto-sousaa" target="_blank">
						<IconBrandLinkedin/>
					</Link>

					<Link href="https://github.com/Augusto9237" target="_blank">
						<IconBrandGithub />
					</Link>
					<IconBrandInstagram />
				</div>
			</Container>
		</header>
	)
}
