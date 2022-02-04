import styles from "./dist/utils.module.css";
import React from "react";
import { useRouter } from "next/router";
import { useHotkeys } from "react-hotkeys-hook";
import useFocus from "../hooks/useFocus";
import searchFor from "./search";
import Link from "next/link";

export const Title = ({ children, addCl }) => {
  return <h1 className={styles.title + " " + addCl}>{children}</h1>;
};
export const Text = ({ children, addCl }) => {
  return <p className={styles.text + " " + addCl}>{children}</p>;
};
export const Button = ({ children, link }) => {
  return (
    <Link href={link}>
      <a className={styles.button}>{children}</a>
    </Link>
  );
};

export const Input = ({ children, type, addCl, required }) => {
  const router = useRouter();
  const [list, setList] = React.useState({});
  const [results, addResults] = React.useState([]);
  const [isClicked, showResults] = React.useState(false);
  let component;
  switch (type) {
    case "short-text":
      component = (
        <input
          type="text"
          className={styles.input + " " + addCl}
          required={required}
        />
      );
      break;
    case "long-text":
      component = (
        <textarea
          className={styles.textarea + " " + addCl}
          required={required}
        />
      );
      break;
    case "email":
      component = (
        <input
          type="email"
          className={styles.input + " " + addCl}
          required={required}
        />
      );
      break;
    case "search":
      const [searchRef, setSearchFocus] = useFocus();
      useHotkeys("ctrl+b", () => setSearchFocus(true));
      useHotkeys("escape", () => setSearchFocus(false));
      React.useEffect(() => {
        fetch("https://api.coingecko.com/api/v3/coins/list", {
          method: "GET",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            setList(data);
          });
      }, []);
      const startWriting = () => {
        return (
          <>
            Escribe 2 letras{" "}
            <span>
              <b>CTRL</b>
              <b>Enter</b>
            </span>
          </>
        );
      };
      component = (
        <section className="search-container">
          <div className="search">
            <input
              type="text"
              placeholder="Buscar"
              className="search-input"
              autoComplete="off"
              ref={searchRef}
              onFocus={() => showResults(true)}
              onBlur={() => showResults(false)}
              onChange={(e) => {
                addResults(searchFor(e.target.value, list));
              }}
            />
            <span>
              <b>CTRL</b> <b>B</b>
            </span>
          </div>
          <section className="results-container">
            {isClicked && results.length == 0 ? (
              <div className="search-result">
                {list.length > 0 ? startWriting() : "Cargando"}
              </div>
            ) : (
              results.map((item, index) => {
                return (
                  <div
                    className="search-result"
                    key={index}
                    onClick={() => router.push(`/precios/${item.id}`)}
                  >
                    {item.name}
                  </div>
                );
              })
            )}
          </section>
        </section>
      );
      break;
  }
  return component;
};
