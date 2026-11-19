import githubLogo from "../assets/github.svg";
import searchIcon from "../assets/search.svg";
import mainPhoto from "../assets/main-photo.svg";
import segurancaIcon from "../assets/seguranca.png";
import visaoIcone from "../assets/view.png";
import versatileIcon from "../assets/versatil.png";
import economyIcon from "../assets/economy.png";

export default function App() {
  return (
    <>
      <div className="bg-[#ffa8ff16]">
        <div className="max-w-7xl min-h-screen w-full mx-auto flex-col flex-grow">
          <header className="w-full w-full h-20">
            <nav className="flex p-5 justify-between">
              <div className="justify-left">
                <span className="text-[#8611bd] font-extrabold text-3xl">
                  $KIPULAG
                </span>
              </div>
              <div className="justify-end flex gap-5">
                <search className="w-auto flex relative items-center static">
                  <img
                    src={searchIcon}
                    width={20}
                    alt="GitHub Logo"
                    className="absolute"
                  />
                  <input
                    type="search "
                    placeholder="Pesquisar"
                    className="border border-gray-300 rounded-md px-5 text-sm p-1 bg-gray-100 w-45"
                  />
                </search>
                <a href="https://github.com/scrola/skipulag" target="_blank">
                  <img src={githubLogo} alt="" width={30} />
                </a>
                <button className="text-sm rounded rounded-md bg-[#8611bd] text-white px-5 font-semibold">
                  Dashboard
                </button>
              </div>
            </nav>
          </header>
          <main className="p-10">
            <section>
              <div className="w-full justify-between flex p-10 bg-radial from-[#bc5de814] to-[#bc5de823]">
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
                    Traga suas finanças e organize todo os seus gastos e
                    receitas de forma segura, simples e rápida.
                  </p>
                  <button className="grid justify-left bg-[#8611bd] rounded-sm text-white px-2 py-1 font-semibold w-20 text-xl max-2xl">
                    Iniciar
                  </button>
                </div>
                <img
                  src={mainPhoto}
                  alt="Skipulag Chart"
                  className="px-5"
                  width={220}
                />
              </div>
            </section>
            <section className="py-10 w-full flex-col justify-between px-1 lg:px-0">
              <h2 className="text-center text-3xl font-bold">
                Por que escolher o{" "}
                <span className="text-[#8611bd]">$KIPULAG</span>?
              </h2>
              <div className="flex flex-col justify-between py-10 w-full lg:flex-row md:flex-col">
                <div className="flex-1 rounded border border-gray-200 p-5 ">
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
                  <img src={economyIcon} alt="" className="pb-2" />
                  <h2 className="pb-5 font-bold">Economia</h2>
                  <p className="text-sm">
                    Usuários do Brasil podem ver em tempo real a cotação do
                    dólar, BTC e demais indicadores econômicos.
                  </p>
                </div>
              </div>
            </section>
          </main>

          {/* <footer className="w-full h-20 flex items-center justify-center  static">
            <p className="text-center text-xs">
              Desenvolvido por &copy;{" "}
              <a
                className="hover:underline text-[#8611bd]"
                href="https://github.com/scrola"
                target="_blank"
              >
                Carlos Lopes
              </a>
            </p>
          </footer> */}
        </div>
      </div>
    </>
  );
}
