import { Query } from "../";

const all = () =>
  Query(`
    SELECT
        blogs.*,
        authors.name
    FROM blogs
    JOIN authors ON authors.id = blogs.authorid
`);

const one = id =>
  Query(`
    SELECT
        blogs.*,
        authors.name
    FROM blogs
    JOIN authors ON authors.id = blogs.authorid
    WHERE blogs.id = ${id} 
`);

const post = (title: string, content: string, authorid: number) => 
Query(`
INSERT INTO blogs (title, content, authorid) 
VALUE (?, ?, ?);`, [title, content, Number(authorid)]
);

const put = (title:string, content: string, id: number) => 
Query(
`UPDATE blogs SET title = ?, content = ? WHERE id = ?;`, 
[title,content, id]);

const destroy = (id: number) => Query(
    `DELETE FROM blogs.blogs WHERE (id = ?);`, 
    [id]);

export default {
  all,
  one,
  post,
  put,
  destroy
};
