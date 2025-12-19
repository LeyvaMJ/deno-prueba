import { Head } from "$fresh/runtime.ts";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portafolio</title>
      </Head>

      <main class="min-h-screen bg-gray-100 text-gray-800">
        {/* Sección Hero */}
        <section class="bg-blue-400 text-center py-20">
          <img
            src="/perfil.jpg"
            alt="Foto de perfil"
            class="w-40 h-30 mx-auto rounded-full border-4 border-white mb-6 object-cover"
          />

  <h1 class="text-4xl font-bold">Hola, soy Mijael 👋</h1>
  <p class="mt-4 text-xl">
    Ingeniero de Sistemas e Informatica | Desarrollo Web
  </p>

  <div class="mt-8 flex justify-center gap-4">
          <a
          href="https://www.linkedin.com/in/mijael-aldair-leyva/"
          target="_blank"
           class="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
          >
          LinkedIn
          </a>

          <a
          href="https://github.com/LeyvaMJ"
          target="_blank"
          class="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-900"
          >
          GitHub
           </a>

          <a
          href="mailto:mijaelleyva84@email.com"
          class="bg-white text-gray-800 px-6 py-2 rounded border hover:bg-gray-100"
          >
          Email
          </a>
  </div>

        </section>
        {/* Sobre mí */}
        <section class="max-w-4xl mx-auto py-16 px-6">
          <h2 class="text-2xl font-bold mb-4">Sobre mí</h2>
          <p>
            Soy egresado de la carrera de Ingenieria de Sistemas e Informatica con interés en el desarrollo web.
            Este portafolio fue creado usando Deno y Fresh para demostrar mis skills y proyectos.
          </p>
        </section>


        {/* Proyectos */}
        <section class="bg-white py-16 px-6">
          <div class="max-w-4xl mx-auto">
            <h2 class="text-2xl font-bold mb-6">Proyectos</h2>

            <ul class="space-y-4">
              <li class="border p-4 rounded">
                <h3 class="font-semibold">Proyecto 1</h3>
                <p>Página web sencilla con Fresh</p>

                  <a
                    href="https://github.com/tuusuario/proyecto1"
                    target="_blank"
                    class="inline-block mt-2 text-green-600 font-semibold"
                  >
                  Ver proyecto →
                  </a>
              </li>

              <li class="border p-4 rounded">
                <h3 class="font-semibold">Proyecto 2</h3>
                <p>Sistema académico (en desarrollo)</p>
              </li>
            </ul>
          </div>
        </section>

        {/* Contacto */}
        <section class="max-w-4xl mx-auto py-16 px-6">
          <h2 class="text-2xl font-bold mb-4">Contacto</h2>
          <p>Email: leyvamijael2004@gmail.com</p>
          <p>LinkedIn: Mijael Aldair Leyva Travezaño </p>
        </section>

        <footer class="bg-gray-800 text-white text-center py-6">
          © 2025 - Mijael Leyva
        </footer>
      </main>
    </>
  );
}
