import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ArticleFooter() {

    let theme = useContext(ThemeContext);

    return (
        <div className={ theme == "light" ? "light" : "dark"}>
            <span>Share</span> | <span>Save</span> | <span>Comment</span>
        </div>
    );
}