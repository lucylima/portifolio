function Header() {
  return (
    <header className="flex align-middle bg-violet-600 text-slate-50 gap-3 justify-between py-3 px-5">
      <h2 className="text-2xl">Lucy Lima Santos</h2>
      <ul className="flex gap-3 justify-center items-center">
        <li className="py-2 px-4 hover:bg-violet-800 rounded-2xl">
          <a href="#">Inicio</a>
        </li>
        <li className="py-2 px-4 hover:bg-violet-800 rounded-2xl">
          <a href="#">Sobre mim</a>
        </li>
        <li className="py-2 px-4 hover:bg-violet-800 rounded-2xl">
          <a href="#">Projetos</a>
        </li>
        <li className="py-2 px-4 hover:bg-violet-800 rounded-2xl">
          <a href="#">Contatos</a>
        </li>
      </ul>
    </header>
  );
}

export { Header };
