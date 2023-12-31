// import React, { useEffect, useState } from "react";
import React, { useState } from "react";
import * as XLSX from "xlsx";
import styles from "./Clients.module.scss";
import TableClients from "../TableClients/TableClients";
import TableClientsMobile from "../TableClients/TableClientsMobile";
import Headline from "../Headline/Headline";
import Button from "../ButtonLK/Button";
import search from "../../images/lk/search.svg";
import shape from "../../images/lk/shape.svg";
import exel from "../../images/lk/exel.svg";
// import filter from "../../images/lk/filter.svg";
import exelHovered from "../../images/lk/exelHovered.svg";
// import filterHovered from "../../images/lk/filterHovered.svg";
// import clients from "../../utils/clients.json";
// import { api } from "../../utils/Api";

function Clients({ openPopupAddClient, openPopupEditClient, data, isLoading }) {
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const filteredData = data.filter((row) =>
    Object.values(row).some((value) =>
      value === null
        ? []
        : value.toString().toLowerCase().includes(searchValue.toLowerCase())
    )
  );
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const exportToExcel = (jsonData) => {
    const worksheet = XLSX.utils.json_to_sheet(jsonData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, "клиенты.xlsx");
  };
  const handleTableDownload = () => {
    exportToExcel(data);
  };
  return (
    <main className={styles.content}>
      <div>
        <Headline title="Клиенты" />
        <div className={styles.buttons}>
          <Button
            img={shape}
            style={{ backgroundColor: "#5CA1EA", color: "#FFFFFF" }}
            hoverStyle={{ backgroundColor: "#384098", color: "#FFFFFF" }}
            text="Добавить клиента"
            onClick={() => {
              openPopupAddClient();
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div className={styles.search}>
              <input
                className={styles.search__input}
                type="text"
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                placeholder="Поиск"
              />
              <img className={styles.search__img} src={search} alt="поиск" />
            </div>
            <Button
              img={exel}
              hoverImg={exelHovered}
              style={{
                backgroundColor: "#e5f0fb",
                color: "#5ca1ea",
                marginLeft: "60px",
              }}
              hoverStyle={{
                backgroundColor: "#5CA1EA",
                color: "#FFFFFF",
                marginLeft: "60px",
              }}
              text="Выгрузить в excel"
              onClick={handleTableDownload}
            />
            {/* <Button
              img={filter}
              hoverImg={filterHovered}
              style={{
                backgroundColor: "#e5f0fb",
                color: "#5ca1ea",
                marginLeft: "20px",
              }}
              hoverStyle={{
                backgroundColor: "#5CA1EA",
                color: "#FFFFFF",
                marginLeft: "20px",
              }}
              text="Фильтр"
            /> */}
          </div>
        </div>
      </div>
      <div className={styles.main__table}>
        <TableClients
          openPopupEditClient={openPopupEditClient}
          currentItems={currentItems}
          currentPage={currentPage}
          paginateActivation={data.length > itemsPerPage}
          paginate={paginate}
          totalPages={totalPages}
          data={data}
          isLoading={isLoading}
        />
        <TableClientsMobile openPopupEditClient={openPopupEditClient} />
      </div>
    </main>
  );
}

export default Clients;
