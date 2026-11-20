import githubLogo from "../assets/github.svg";
import segurancaIcon from "../assets/seguranca.png";
import visaoIcone from "../assets/view.png";
import versatileIcon from "../assets/versatil.png";
import economyIcon from "../assets/economy.png";
import mainPhoto from "../assets/main-photo.svg";
import livreIndicacao from "../assets/livre.svg";

export default function App() {
  return (
    <div className="max-w-7xl w-full mx-auto">
      <div className="bg-[#ffa8ff16] flex flex-col min-h-screen">
        <header className="w-full h-20 border-b border-gray-300">
          <nav className="flex p-5 justify-between">
            <div className="justify-left">
              <span className="text-[#8611bd] font-extrabold text-3xl">
                $KIPULAG
              </span>
            </div>
            <div className="justify-end flex gap-5">
              <a href="https://github.com" target="_blank">
                <img src={githubLogo} alt="" width={30} />
              </a>
              <button className="text-sm rounded-md bg-[#8611bd] text-white px-5 font-semibold">
                Dashboard
              </button>
            </div>
          </nav>
        </header>

        <main className="p-10 flex-1 border-b border-gray-300">
          <section>
            <div className="w-full flex-col rounded-md justify-between flex p-10 bg-radial from-[#bc5de814] to-[#bc5de823]">
              <div className="flex-col">
                <h4 className="text-5xl text-black font-bold text-left">
                  Cuide das suas finanças.
                </h4>
                <h4 className="text-3xl text-black font-bold text-left">
                  Planeje seu futuro.
                </h4>
                <h4 className="text-xl text-black font-bold text-left">
                  Alcance objetivos.
                </h4>
                <p className="py-10 text-left text-lg">
                  Traga suas finanças e organize todo os seus gastos e receitas
                  de forma segura, simples e rápida.
                </p>
                <button className="grid justify-left bg-[#8611bd] rounded-sm text-white px-2 py-1 font-semibold w-20 text-xl max-2xl">
                  Iniciar
                </button>
              </div>
            </div>
          </section>

          <section className="py-10 w-full flex-col justify-between px-1 lg:px-0">
            <h2 className="text-center text-3xl font-bold">
              Por que escolher o{" "}
              <span className="text-[#8611bd]">$KIPULAG</span>?
            </h2>
            <div className="flex space-y-1 rounded-xl lg:gap-1 flex-col justify-between py-10 w-full lg:flex-row md:flex-col">
              <div className="flex-1 rounded border border-gray-200 p-5">
                <img src={segurancaIcon} alt="" className="pb-2" />
                <h2 className="pb-5 font-bold">Segurança</h2>
                <p className="text-sm">
                  Em ambientes locais, o programa não requisita nenhum dado
                  pessoal, e nenhum login é necessário. Suas informações são
                  armazenadas diretamente no seu computador.
                </p>
              </div>
              <div className="flex-1 rounded border border-gray-200 p-5">
                <img src={visaoIcone} alt="" className="pb-2" />
                <h2 className="pb-5 font-bold">Visualização</h2>
                <p className="text-sm">
                  Você é capaz de visualizar gráficos, emitir relatórios e
                  assistir detalhadamente os rumos das suas finanças pessoais.
                </p>
              </div>
              <div className="flex-1 rounded border border-gray-200 p-5">
                <img src={versatileIcon} alt="" className="pb-2" />
                <h2 className="pb-5 font-bold">Versatilidade</h2>
                <p className="text-sm">
                  O software não está limitado apenas ao Brasil. É possível
                  mudar a moeda a qualquer momento.
                </p>
              </div>
              <div className="flex-1 rounded border border-gray-200 p-5">
                <img src={economyIcon} alt="" className="" />
                <h2 className="font-bold">Economia</h2>
                <p className="text-sm">
                  Usuários do Brasil podem ver em tempo real a cotação do dólar,
                  BTC e demais indicadores econômicos.
                </p>
              </div>
            </div>
          </section>

          <section className="w-full items-center space-y-5 lg:flex-row rounded-md flex flex-col h-auto">
            <div className="flex space-y-6 flex-col items-center text-center">
              <div className="flex items-center justify-center gap-2 px-4 py-1 bg-[#bc5de823] rounded-2xl">
                <img src={livreIndicacao} alt="" width={20} />
                <p className="font-semibold text-[#8611bd]">Livre Indicação</p>
              </div>

              <h1 className="text-3xl font-bold text-center lg:text-left pb-4">
                Visualização interativa
              </h1>
              <p className="text-center text-lg lg:text-left pb-4">
                Usufrua de um painel totalmente interativo com recursos
                interessantes e visualmente agradáveis. Você pode também
                exportar relatórios, visualizar gráficos e acompanhar
                tendências.
              </p>
            </div>
            <img
              src={mainPhoto}
              width={500}
              className="rounded-md"
              alt="Chart photo"
            />
          </section>
        </main>
        <footer className="w-full bg-gray-100 flex flex-col px-10 py-12">
          <p className="font-semibold text-black text-sm pb-3">Recursos</p>
          <a
            href="https://github.com"
            className="text-sm hover:underline w-fit"
          >
            GitHub Repo
          </a>
          <a
            href="https://github.com/README.md"
            className="text-sm hover:underline w-fit"
          >
            Sobre
          </a>
          <p className="text-center text-xs mt-8">
            Desenvolvido por &copy;{" "}
            <a
              className="hover:underline text-[#8611bd]"
              href="https://github.com"
              target="_blank"
            >
              Carlos Lopes
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
