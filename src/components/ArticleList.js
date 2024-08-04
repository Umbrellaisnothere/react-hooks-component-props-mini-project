import React from "react";

const ArticleList = () => {
    return (
        <div>
        {blogData.posts.map(({ id, title, date = "January 1, 1970", preview}) => (

            <article key={id}>
                <h3>{title}</h3>
                <small>{date}</small>
                <p>{preview}</p>
            </article>
        ))};
        </div>
    )
};

export default ArticleList;