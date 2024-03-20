import ArticleFooter from "./ArticleFooter";
import { ThemeContext } from "./ThemeContext";

type ArticleProps = {
    title: string;
    content: string;
}

export default function Article(props:ArticleProps) {
    return (
        <ThemeContext.Provider value="dark">
            <div className={"article "}>
                <h1>{props.title}</h1>
                <p>{props.content}</p>
                <ArticleFooter/>
            </div>
        </ThemeContext.Provider>
    );
}