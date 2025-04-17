import { obterProjetos } from "@/functions/projetos"
import { obterTecnologias } from "@/functions/tecnologias"
import Container from "@/components/shared/Container"
import Curriculo from "@/components/curriculo"
import Principal from "@/components/landing/Principal"
import Projetos from "@/components/projetos/Projetos"

export default async function Home() {
	const tecnologias = await obterTecnologias()
	const projetos = await obterProjetos()

	return (
		<div>
			<Principal tecnologias={tecnologias.destaques} />
			<section id='projetos'>
				<Container className="pt-24 flex flex-col items-center gap-10 min-h-screen">
					<Projetos titulo="Destaque" lista={projetos.destaques} />
					<Projetos titulo="Web" lista={projetos.web} />
					<Projetos titulo="Mobile" lista={projetos.mobile} />
				</Container>
			</section>

			<section id='curriculo'>
				<Container className="pt-24 flex flex-col items-center gap-10 min-h-screen">
					<Curriculo tecnologias={tecnologias.todas} />
				</Container>
			</section >
		</div >
	)
}
