'use client'

import { Download } from "lucide-react";

export default function ButtonDownloadResume() {

    async function downloadPDF() {
        try {
            const response = await fetch('https://tdpicjcnerrhbfxjnwjp.supabase.co/storage/v1/object/sign/assets/Profile%20(1).pdf?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJhc3NldHMvUHJvZmlsZSAoMSkucGRmIiwiaWF0IjoxNzMwNjk0NDU4LCJleHAiOjE3NjIyMzA0NTh9.Vyi3aQbdeW-o9rA5tf-6IZrfTrCXhi1Op1_ivTVdK7w&t=2024-11-04T04%3A27%3A37.490Z', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/pdf',
                },
            });

            if (!response.ok) {
                throw new Error('Erro ao baixar o PDF');
            }

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);  // Cria uma URL temporária para o blob
            const a = document.createElement('a');
            a.href = url;
            a.download = 'Currículo Augusto Sousa.pdf'; // Define o nome do arquivo baixado
            document.body.appendChild(a); // Adiciona o link ao DOM
            a.click(); // Simula o clique no link para iniciar o download
            a.remove(); // Remove o link do DOM

        } catch (error) {
            console.error('Erro:', error);
        }
    };

    return (
        <button  onClick={downloadPDF} className='bg-blue-600 p-2 rounded-[12px] flex gap-2 items-center font-semibold uppercase max-md:w-full'>
            <Download/>
            <span className='mt-1'>
                Download Currículo
            </span>
        </button>
    )
}
