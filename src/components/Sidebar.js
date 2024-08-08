import './Sidebar.css';


const Sidebar = () => {
  return (
    <aside className="sidebar">
      <h2>Filtrare Proiecte</h2>
      <form>
        <label htmlFor="country">Țară</label>
        <select id="country">
          <option value="all">Toate</option>
          {/* Add more country options here */}
        </select>

        <label htmlFor="group">Grup de lucru</label>
        <select id="group">
          <option value="all">Toate</option>
          {/* Add more group options here */}
        </select>

        <label htmlFor="project">Proiect</label>
        <select id="project">
          <option value="all">Toate</option>
          {/* Add more project options here */}
        </select>

        <button type="submit">Filtrare</button>
        <button type="button">Arată toate proiectele</button>
      </form>
    </aside>
  );
};

export default Sidebar;
