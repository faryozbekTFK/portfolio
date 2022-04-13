import dataTable from "../components/assetsComponents/table-data.json";
import "../styles/news.css";

function NewsComp({ data }) {
  return (
    <div className="col-md-4 col-sm-6 content-card m-auto">
      <div className="card-big-shadow m-auto">
        <div
          className="card card-just-text"
          data-background="color"
          data-color="blue"
          data-radius="none"
        >
          <div className="content">
            <h4 className="title">{data.nomi}</h4>
            <p className="description">
              {data.statusi} <br />
              {data.boshlangan} - {data.tugatiladi}
              <br />
              <button className="border-0 outline-none bg-transparent mt-1 fst-italic">
                Batafsil...
              </button>
            </p>
            <h6 className="category">{data.createdTime}</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

function News() {
  return (
    <div className="news py-2 d-flex flex-column justify-content-evenly align-items-center">
      <h2>Yangiliklar</h2>
      <div className="container bootstrap snippets bootdeys row">
        <NewsComp data={dataTable[dataTable.length - 1]} />
        <NewsComp data={dataTable[dataTable.length - 2]} />
        <NewsComp data={dataTable[dataTable.length - 3]} />
      </div>
    </div>
  );
}

export default News;
