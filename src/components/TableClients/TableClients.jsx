/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect, useMemo } from "react";
import { useTable } from "react-table";
import styles from "./TableClients.module.css";
import CLIENTS from "../../utils/clients.json";

export default function TableClients() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log(width);
  const COLUMNS = [
    {
      Header: "Дата регистрации",
      accessor: "reg",
    },
    {
      Header: "Телефон",
      accessor: "phone",
    },
    {
      Header: "Номер карты",
      accessor: "cardId",
    },
    {
      Header: "Тип карты",
      accessor: "cardType",
    },
    {
      Header: "Телеграм",
      accessor: "telegram",
    },
    {
      Header: "Пол",
      accessor: "gender",
    },
    {
      Header: "Фамилия",
      accessor: "surname",
    },
    {
      Header: "Имя",
      accessor: "name",
    },
    {
      Header: "Отчество",
      accessor: "middleName",
    },
    {
      Header: "Дата рождения",
      accessor: "birthday",
    },
    {
      Header: "Бонусный баланс",
      accessor: "bonusBalance",
    },
    {
      Header: "Примечание",
      accessor: "note",
    },
  ];

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => CLIENTS.clients, []);
  const tableInstance = useTable({
    columns,
    data,
  });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;
  // return (
  //   <table className={styles.table} {...getTableProps()}>
  //     <thead className={styles.header}>
  //       {headerGroups.map((headerGroup) => (
  //         <tr
  //           className={styles.header__row}
  //           {...headerGroup.getHeaderGroupProps()}
  //         >
  //           {headerGroup.headers.map((column) => (
  //             <th className={styles.header__data} {...column.getHeaderProps()}>
  //               {column.render("Header")}
  //             </th>
  //           ))}
  //         </tr>
  //       ))}
  //     </thead>
  //     <tbody {...getTableBodyProps()}>
  //       {rows.map((row) => {
  //         prepareRow(row);
  //         return (
  //           <tr className={styles.content__row} {...row.getRowProps()}>
  //             {row.cells.map((cell) => (
  //               <td className={styles.content__data} {...cell.getCellProps()}>
  //                 {cell.render("Cell")}
  //               </td>
  //             ))}
  //           </tr>
  //         );
  //       })}
  //     </tbody>
  //   </table>
  // );
  // console.log(headerGroups[0]);
  const head = headerGroups[0].headers.map((header) => (
    // console.log(header)
    <tr>
      <td className={styles.header__data}>{header.Header}</td>
    </tr>
  ));

  return (
    <table className={styles.table} {...getTableProps()}>
      {/* <thead className={styles.header}>
        {headerGroups.map((headerGroup) => (
          <tr
            className={styles.header__row}
            {...headerGroup.getHeaderGroupProps()}
          >
            {headerGroup.headers.map((column) => (
              <th className={styles.header__data} {...column.getHeaderProps()}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead> */}
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr className={styles.content__row} {...row.getRowProps()}>
              {head}
              {row.cells.map((cell) => (
                <td className={styles.content__data} {...cell.getCellProps()}>
                  {cell.render("Cell")}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
