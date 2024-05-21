const db = require('../services/db');

const Blog = require('../class/blog.class');

// Controller getAllBlogs
exports.getAllBlogs = (req, res) => {
    const sql = 'SELECT * FROM blogs';
    const dbInstance = db.getInstance(); // Obtenir une instance de la classe Database

    dbInstance.query(sql, (err, result) => {
        if (err) {
            console.error("Erreur lors de la récupération des blogs", err);
            return res.status(500).json({ message: "Erreur lors de la récupération des blogs" });
        } else {
            const blogs = result.map(blog => new Blog(blog.id, blog.titre, blog.date, blog.photo, blog.description));
            return res.status(200).json(blogs);
        }
    });
}

//Controller getBlogById
exports.getBlogById = (req, res) => {
    const id = req.params.id;
    const sql = 'SELECT * FROM blogs WHERE id = ?';
    const values = [id];
    const dbInstance = db.getInstance(); // Obtenir une instance de la classe Database

    dbInstance.query(sql, values, (err, result) => {
        if (err) {
            console.error("Erreur lors de la récupération du blog", err);
            return res.status(500).json({ message: "Erreur lors de la récupération du blog" });
        } else {
            if (result.length === 0) {
                return res.status(404).json({ message: "Blog non trouvé" });
            } else {
                const blog = Blog.fromMap(result[0]);
                return res.status(200).json(blog);
            }
        }
    });
}


//Controller getLastBlog
exports.getLastBlog = (req, res) => {
    const sql = 'SELECT * FROM blogs ORDER BY id DESC LIMIT 1';
    const dbInstance = db.getInstance(); // Obtenir une instance de la classe Database

    dbInstance.query(sql, (err, result) => {
        if (err) {
            console.error("Erreur lors de la récupération du dernier blog", err);
            return res.status(500).json({ message: "Erreur lors de la récupération du dernier blog" });
        } else {
            if (result.length === 0) {
                return res.status(404).json({ message: "Blog non trouvé" });
            } else {
                const blog = Blog.fromMap(result[0]);
                return res.status(200).json(blog);
            }
        }
    });
}