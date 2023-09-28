const { createCategory, getAllCategories } = require("../controllers/categoriaController");
const { getAllCourses, createCourse, getCourseById, deleteCourse, updateCourse } = require("../controllers/cursoController");
const { getAllUsers, register, changeToAdmin, getUserById, deleteUser, login, updateUser} = require("../controllers/userController");
const authenticateAdmin = require("../middlewares/authAdmin");
const authenticateUser = require("../middlewares/authUser");
const upload = require("../middlewares/multer");

const router = require("express").Router();


// registro y login routes
router.post("/registrar", register);
router.post("/login", login);

// user routes
router.get("/users", authenticateAdmin, getAllUsers) // da error si quiero usar hasta aca porque no lo estoy usando
router.get("/user/:id", authenticateAdmin, getUserById);
router.put("/user/:id", authenticateUser, updateUser);
router.delete("/user/:id", authenticateAdmin, deleteUser);


// admin routes
router.put("/admin/:id", authenticateAdmin, changeToAdmin);

// categorias routes
router.post("/categoria", authenticateAdmin, createCategory);
router.get("/categorias", getAllCategories);

//cursos routes
router.get("/cursos", getAllCourses);
router.post("/curso", authenticateAdmin, upload.single("imagen"), createCourse); // es el nombre que tiene que tener el campo que le estamos pasando (Implica hacer cambios en el controlador)
router.get("/curso/:id", getCourseById);
router.delete("/curso/:id", authenticateAdmin, deleteCourse);
router.put("/curso/:id", authenticateAdmin, updateCourse);























// router.post('/', (req, res) => {
//     const {nombre} = req.body;
//     console.log(req.body);
    
//     if (nombre === "") {
//         return res.status(400).send("algo anda mal")
        
//     }
//     return res.send({
//         nombre
//     })
// })

// router.put("/:id", (req, res) => {
//     const userId = req.params.id; // para editar un producto o borrarlo
//     console.log(userId);
//     res.send(userId);
// })

module.exports = router; 
    
// no es muy conveniente el patch. lo uso cuando quiero editar un atributo de un objeto.