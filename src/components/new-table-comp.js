import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import tableData from "./assetsComponents/table-data.json";
import { FiFilePlus } from "react-icons/fi";
import "datatables.net-dt/js/dataTables.dataTables.js";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/new-table-comp.css";

class NewTableComp extends React.Component {
  state = {
    selectStatus: "",
    dataAPI: [],
  };

  async componentDidMount() {
    //initialize datatable
    $(document).ready(function () {
      $("#example").DataTable();
    });
  }

  render() {
    let id = 0;

    //Datatable HTML
    return (
      <div className="MainDiv my-4 overflow-hidden" id="table">
        <div className="jumbotron text-center bg-sky">
          <h3 data-aos="fade-down" data-aos-duration="1000">
            Yo'llar ro'yxati
          </h3>
          <select
            className="selectStatus"
            name="status"
            data-aos="fade-up"
            data-aos-duration="1000"
            style={{
              padding: "5px",
              border: "2px solid gray",
              outline: "none",
              borderRadius: "3px",
              marginTop: "10px",
            }}
          >
            <option disabled>Holatni tanlang</option>
            <option value="barchasi">Barchasi</option>
            <option value="ta'mirlanmoqda">Ta'mirlanayotgan yo'llar</option>
            <option value="rejalashtirilmoqda">
              Ta'mirlanishi rejalashtirilgan yo'llar
            </option>
            <option value="tayyor">Ta'mirlanib bo'lgan yo'llar</option>
          </select>
        </div>

        <div className="container">
          <table id="example" className="display">
            <thead>
              <tr
                data-aos="flip-up"
                data-aos-offset="50"
                data-aos-duration="1000"
              >
                <th>№</th>
                <th>Viloyat</th>
                <th>Ko'cha nomi</th>
                <th>Xolati</th>
                <th>Yo'l uzunligi</th>
                <th>Boshlangan sana</th>
                <th>Tugatilgan sana</th>
                <th>...</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((dataItem) => {
                return (
                  <tr
                    key={id}
                    data-aos="flip-up"
                    data-aos-offset="50"
                    data-aos-duration="1000"
                  >
                    <td>{++id}</td>
                    <td>{dataItem.viloyat}</td>
                    <td>{dataItem.nomi}</td>
                    <td>{dataItem.statusi}</td>
                    <td>{dataItem.uzunligi} km</td>
                    <td>{dataItem.boshlangan}</td>
                    <td>{dataItem.tugatiladi}</td>
                    <td>
                      <Link to="/">
                        <FiFilePlus /> Batafsil...
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot
              data-aos="flip-up"
              data-aos-offset="50"
              data-aos-duration="1000"
            >
              <tr>
                <th>№</th>
                <th>Viloyat</th>
                <th>Ko'cha nomi</th>
                <th>Xolati</th>
                <th>Yo'l uzunligi</th>
                <th>Boshlangan sana</th>
                <th>Tugatilgan sana</th>
                <th>...</th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}
export default NewTableComp;
